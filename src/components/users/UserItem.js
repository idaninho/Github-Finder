import React, { Component } from 'react';

export class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: '',
    html_url: '',
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return <div className="card text-center">UserItem</div>;
  }
}

export default UserItem;
