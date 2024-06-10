import React from 'react';

const NavbarBusiness: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/business-dashboard">Business Dashboard</a></li>
        <li><a href="/manage-products">Manage Products</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavbarBusiness;
