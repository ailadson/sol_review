import React from 'react';

import '../../style/detail_view.scss';

class DetailView extends React.Component {
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderBirthdate (unixtime) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = new Date(unixtime*1000);
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var d = date.getDate();
    return (month + ' ' + d + ', ' + year);
  }

  render() {
    let user = this.props.user;

    if (!user) {
      return (<div></div>);
    }
    return (
      <div className="user-view-container">
        <div className="user-view-info">
          <div>
            <img src={user.largeImageURL} />
            <span className="detail-header-data">
              <h3>Name:</h3>
              <h1>{user.name}</h1>
              <br/>
              <h3>Company:</h3>
              <h1>{user.company}</h1>
            </span>
          </div>

          <div>
            <h3>Phone:</h3>
            <span className="phone-left">
              {user.phone.mobile}
            </span>
            <span className="phone-right">
              Mobile
            </span>
            <br/>
            <span className="phone-left">
              {user.phone.home}
            </span>
            <span className="phone-right">
              Home
            </span>
            <br/>
            <span className="phone-left">
              {user.phone.work}
            </span>
            <span className="phone-right">
              Work
            </span>
          </div>

          <div>
            <h3>Address:</h3>
            {user.address.street}
            <br/>
            {user.address.city}, {user.address.state} {user.address.zip}
          </div>

          <div>
            <h3>Birthday:</h3>
            {this.renderBirthdate(user.birthdate)}
          </div>

          <div>
            <h3>Email:</h3>
            {user.email}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailView;
