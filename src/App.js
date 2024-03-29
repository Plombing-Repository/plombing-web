import './App.css';
import React, { useEffect } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import About from './pages/About/About';
import Articles from './pages/Community/Contents/Article/Articles';
import Participation from './pages/Participation/Participation';
import Result from './pages/Participation/Result';
import Loading from './pages/Participation/Loading';
import Post from './pages/Community/Posts/Post';
import Recommendation from './pages/Community/Contents/Mountain/Recommendation';

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
        <React.Fragment>
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<Post />} />{' '}
        </React.Fragment>
        <Route path="/about" element={<About />}></Route>
        <Route path="/article/:id" element={<Articles />} />
        <Route path="/recommend/:id" element={<Recommendation />} />
        <Route path="plombing" element={<Participation />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  html {
    scroll-behavior: smooth;
  }

  *::selection{
    background-color: #a3cca2;
    color: black;
  }
  body {
    font-family: Pretendard;
  }
`;

const Container = styled.div`
  position: relative;
`;
