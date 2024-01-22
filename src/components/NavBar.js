import React from 'react';
import { NavBarContainer } from './NavBar.style';
import { FaChevronDown } from 'react-icons/fa6';
import Button from './Button';
import LogoImage from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <NavBarContainer>
      {/* Logo */}
      <div aria-label="clear link logo">
        <img src={LogoImage} alt="Clear Link Logo" />
      </div>

      {/* Menu Item */}
      <ul role="menu" className="navBar-menu">
        <li role="menuitem">
          <p>Products</p>
          <FaChevronDown />
        </li>
        <li role="menuitem">
          <p>Solutions</p>
          <FaChevronDown />
        </li>

        <li role="menuitem">
          <p>Resources</p>
          <FaChevronDown />
        </li>
        <li role="menuitem">
          <p>Pricing</p>
        </li>
      </ul>

      {/* Call to Action Buttons */}

      <div className="navBar-menu__buttons">
        <Button
          text="Talk to sales"
          borderColor="--gray-400"
          bgColor="--base-white"
          textColor="--gray-900"
        />

        <Button
          text="Sign up for free"
          bgColor="--blue-700"
          textColor="--base-white"
        />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
