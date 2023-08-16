import './App.css';
import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import About from './pages/About/About';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />}></Route>
        <Route path="/about" element={<About />}></Route>
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
