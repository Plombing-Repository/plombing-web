import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Section>
      <TextBox>
        <h3>필(必)환경을 부르는 &apos;글로벌 보일링&apos; 시대</h3>
        <p>
          지구가 끓고 있다. 지구가 내는 신음을 가벼이 여겨서는 안 된다. 유엔
          사무총장은 27일(현지시간) <br />
          &quot;지구 &apos;온난화&apos; 시대는 끝났고 지구가 &apos;끓는&apos;
          시대가 도래했다&quot; 말했다.
        </p>
      </TextBox>
      <button>
        <Link to="/article/1">read more</Link>
      </button>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/2f081aed-4ec6-452c-97ca-d3e7d6fdea03/image.svg');
  background-size: cover;
  background-position: bottom;
  padding: 60px 240px 40px 240px;
  button {
    width: 100px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #fff;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    @media screen and (max-width: 500px) {
      width: 80px;
      height: 24px;
    }
  }
  @media screen and (max-width: 500px) {
    background-size: 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px 60px;
  }
`;

const TextBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  text-align: start;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 0;
    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
  }
  p {
    line-height: 150%;
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    height: 92px;
  }
`;

export default Footer;
