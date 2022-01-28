import React from 'react';
import PropTypes from 'prop-types';
const UserItem = ({ user: { login, id } }) => {
  return <div className="card text-center">{id}</div>;
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired,
};


export default UserItem;
