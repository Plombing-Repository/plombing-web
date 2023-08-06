import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Section>
      <TextBox>
        <h3>환경을 생각하는 인공폭포</h3>
        <p>
          삭막한 도시 속에서 시원한 폭포를 바라볼 수 있는 <br />
          휴식 공간이 인기를 끌고 있습니다.
        </p>
      </TextBox>
      <button>read more</button>
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
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/915c841c-f51c-47bd-95e2-88e50b5e7b71/image.png');
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
  }
`;

export default Footer;
