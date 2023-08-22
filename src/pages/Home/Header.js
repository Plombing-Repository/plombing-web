import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import MobileMenu from './MobileMenu';

const Header = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const toggleMenu = () => {
    // const menu = document.querySelector('.menu');
    // menu.classList.toggle('active');
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log(location.pathname);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundColor =
    scrollPosition > 10 ||
    location.pathname === '/about' ||
    location.pathname.startsWith('/article') ||
    location.pathname === '/result'
      ? 'rgba(255, 255, 255, 0.7)'
      : '#fff';

  return (
    <>
      <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Section style={{ background: backgroundColor }}>
        <Icons>
          <StyledLogo onClick={() => window.location.replace('/')} />
          <ToggleButton onClick={toggleMenu}>
            <img src="https://velog.velcdn.com/images/ea_st_ring/post/a636325f-004f-4e10-ba84-7836707cdaf1/image.svg" />
          </ToggleButton>
        </Icons>
        <Menu className="menu">
          <MenuLink to="/community">Community</MenuLink>
          <MenuLink to="/about">Plombing</MenuLink>
        </Menu>
      </Section>
    </>
  );
};

const StyledLogo = styled(Logo)`
  width: 48px;
  height: 44px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 32px;
    height: 30px;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  outline: none;
  background: none;
  border: none;
  right: 16px;
  top: 16px;
  font-size: 28px;
  cursor: pointer;
  color: 'black';
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Icons = styled.div`
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const Section = styled.div`
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 30px 100px;
  height: 0.25rem;
  box-shadow: 0px -3px 40px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  transition: background 0.3s ease;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 30px 16px;
    flex-direction: column;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: white;
    top: 60px;
    &.active {
      display: none;
    }
  }
`;

const MenuLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  text-decoration: none;
  color: #1e1e1e;
  &:hover {
    color: #99e28d;
    cursor: pointer;
  }
  & + & {
    margin-left: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    text-align: center;
    & + & {
      margin: 0;
      border: 1px solid #eaeaea;
    }
  }
`;

export default Header;
