import React from 'react';
import { useUserContext } from '../contexts/UserContext';
import NavbarAdmin from '../Navigation.tsx/NavbarAdmin'; 
import NavbarUser from '../Navigation.tsx/NavbarUser'; 
import NavbarBusiness from '../Navigation.tsx/NavbarBusiness'; 
import NavbarGuest from '../Navigation.tsx/NavbarGuest'; 


const Navbar: React.FC = () => {
  const { userType } = useUserContext();

  switch(userType) {
    case 'admin':
      return <NavbarAdmin />;
    case 'user':
      return <NavbarUser />;
    case 'business':
      return <NavbarBusiness />;
    default:
      return <NavbarGuest />;
  }
};

export default Navbar;
