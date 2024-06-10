import React from 'react';

const NavbarUser: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/my-orders">My Orders</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavbarUser;
