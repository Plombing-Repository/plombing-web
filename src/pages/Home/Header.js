import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';

const Header = () => {
  return (
    <Section>
      <Logo
        style={{ width: '77px', height: '53px', cursor: 'pointer' }}
        onClick={() => window.location.replace('/')}
      />
      <Menu>
        <MenuLink to="community">Community</MenuLink>
        <MenuLink to="flombing">Flombing</MenuLink>
      </Menu>
    </Section>
  );
};

const Section = styled.div`
  background: #ffffff;
  border-bottom: 1px solid #99e28d;
  padding: 40px 250px;
  height: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
