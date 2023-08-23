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
import Board from './pages/Community/Posts/Posts';
import Post from './pages/Community/Posts/Post';
import Recommend1 from './pages/Community/Contents/Mountain/Recommend1';
import Recommend2 from './pages/Community/Contents/Mountain/Recommend2';
import Recommend3 from './pages/Community/Contents/Mountain/Recommend3';

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
        <Route path="/recommend/1" element={<Recommend1 />} />
        <Route path="/recommend/2" element={<Recommend2 />} />
        <Route path="/recommend/3" element={<Recommend3 />} />
        <Route path="plombing" element={<Participation />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </Container>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
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
