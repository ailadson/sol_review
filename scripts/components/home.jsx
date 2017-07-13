import React from 'react';

import DetailView from './detail_view';

import '../../style/home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter : '',
      asideExpanded : false,
      users : [],
      selectedUser : null
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleAside = this.toggleAside.bind(this);
    this.closeAside = this.closeAside.bind(this);
  }

  componentDidMount() {
    let component = this;
    $.ajax({
      method: 'GET',
      url: 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json',
      dataType: 'json',
      success : function (data){
        component.setState({ users : data });
      },
      error : function (err) {
        console.log('Error:', err);
      }
    })
  }

  handleClick(user) {
    return () => {
      this.setState({ selectedUser : user, asideExpanded : false });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  controlScroll(node) {
    if (node) {
      node.addEventListener('scroll', (e) => {
        e.stopPropagation();
      });
    }
  }

  toggleAside(){
    this.setState({ asideExpanded : !this.state.asideExpanded });
  }

  closeAside(){
    this.setState({ asideExpanded : false });
  }

  renderUsers() {
      let searchFilter = this.state.searchFilter.toLowerCase();

      let filteredUsers = this.state.users.filter(user => {
        if (searchFilter === '') {
          return true;
        } else {
          return (`${user.name}`).toLowerCase().indexOf(searchFilter) > -1;
        }
      });

      return filteredUsers.map((user, i) => {
        return (
          <li key={i} onClick={this.handleClick(user)} className="group">
            <img src={user.smallImageURL} />
            <span>
              {user.name}
              <br/>
              {user.phone.work}
            </span>
          </li>
        );
      });
  }

  render() {
    let asideClassName = (this.state.asideExpanded ? "" : "aside-minimized");
    let asideExpandText = (this.state.asideExpanded ? "Hide Users" : "Show Users");

    return (
      <div className="home-container group">
        <aside ref={this.controlScroll}>
          <div className={"aside-patients " + asideClassName}>
            <h2 className="aside-welcome">
              Solstice App
            </h2>
            <input type="text"
              className="search-bar"
              placeholder="Search By Name"
              onChange={this.update('searchFilter')} />
            <h3>Users</h3>
            <ul>{this.renderUsers()}</ul>
          </div>

          <div className="drop-down-link" onClick={this.toggleAside}>
            {asideExpandText}
          </div>
        </aside>

        <section>
          <DetailView user={this.state.selectedUser} />
        </section>
      </div>
    );
  }
}

export default Home;
