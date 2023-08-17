import './App.css';
import React, { useEffect } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import About from './pages/About/About';
import Articles from './pages/Article/Articles';

function App() {
  // 새로고침 시 최상단 이동
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/article/:id" element={<Articles />} />
      </Routes>
    </Container>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Pretendard;
  }
`;

const Container = styled.div`
  position: relative;
`;
