import React from 'react';

const NavbarAdmin: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/admin-dashboard">Admin Dashboard</a></li>
        <li><a href="/manage-users">Manage Users</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
