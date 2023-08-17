import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
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
    location.pathname.startsWith('/article')
      ? 'rgba(255, 255, 255, 0.7)'
      : '#fff';

  return (
    <Section style={{ background: backgroundColor }}>
      <Logo
        style={{ width: '48px', height: '44px', cursor: 'pointer' }}
        onClick={() => window.location.replace('/')}
      />
      <Menu>
        <MenuLink to="/community">Community</MenuLink>
        <MenuLink to="/about">Plombing</MenuLink>
      </Menu>
    </Section>
  );
};

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
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
`;

export default Header;
