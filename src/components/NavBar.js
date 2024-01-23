import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBarContainer } from './NavBar.style';
import { FaChevronDown } from 'react-icons/fa6';
import Button from './Button';
import LogoImage from '../assets/images/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowMobileMenu(false);
  }, []);

  return (
    <NavBarContainer className="autoAlign" ismenu={showMobileMenu}>
      {/* Logo */}
      <div
        aria-label="clear link logo"
        className="navbarLogo"
        onClick={() => {
          navigate('/');
          setShowMobileMenu(false);
        }}
      >
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
          func={() => {
            setShowMobileMenu(false);
          }}
        />

        <Button
          text="Sign up for free"
          bgColor="--blue-700"
          textColor="--base-white"
          func={() => {
            setShowMobileMenu(false);
          }}
        />
      </div>

      <div className="navBar-menu__mobileMenu">
        {showMobileMenu ? (
          <CgClose onClick={() => setShowMobileMenu(false)} />
        ) : (
          <RxHamburgerMenu onClick={() => setShowMobileMenu(true)} />
        )}
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
