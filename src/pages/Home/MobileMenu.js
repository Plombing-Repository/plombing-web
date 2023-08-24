import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
  // 로딩바 바뀜에 따라 props를 총 102번 받음, 수정 필요
  const { isMenuOpen, toggleMenu } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const lateToggleMenu = () => {
    document.querySelector('.section').classList.toggle('close');
    setTimeout(() => {
      toggleMenu();
    }, 300);
  };
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    isMenuOpen &&
    windowWidth <= 500 && (
      <Section className="section">
        <ToggleButton>
          <ImageWrapper onClick={lateToggleMenu}>x</ImageWrapper>
        </ToggleButton>
        <Menu className="menu">
          <MenuLink to="/" activeclassname="active">
            Home
          </MenuLink>
          <MenuLink to="/plombing">Plombing</MenuLink>
          <MenuLink to="/community">Community</MenuLink>
          <MenuLink to="/about">About us</MenuLink>
        </Menu>
      </Section>
    )
  );
};

const Section = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    width: 60%;
    height: 100vh;
    padding: 20px 10px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    background-color: white !important;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    animation: 0.3s ease-in-out slideInFromRight;
    &.close {
      animation: 0.3s ease-in-out slideInFromLeft;
    }
    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

const Menu = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    z-index: 999;
  }
`;

const MenuLink = styled(NavLink)`
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    &:hover {
      color: #99e28d;
      cursor: pointer;
    }
    font-size: 1rem;
    font-weight: 500;
    padding: 8px;
    text-decoration: none;
    z-index: 999;
    color: #1e1e1e;
    &:not(:last-child) {
      border-bottom: 0.1px solid #ebebeb;
    }
    &.active {
      color: #99e28d;
    }
  }
`;

const ToggleButton = styled.button`
  @media screen and (max-width: 500px) {
    align-self: flex-start;
    outline: none;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    z-index: 12;
    color: 'black';
  }
`;

const ImageWrapper = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    color: #444444;
  }
`;
export default MobileMenu;
