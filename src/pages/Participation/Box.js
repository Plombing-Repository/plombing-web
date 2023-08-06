import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // Import prop-types
import CounterButton from './CounterButton';

const BoxContainer = styled.div`
  width: 279px;
  height: 329px;
  flex-shrink: 0;
  border-radius: 21.603px;
  background-color: #99e28d;
  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.15) inset;
  display: flex;
  flex-direction: column;
  align-items: center; // 가로 방향 중앙 정렬
`;

const BoxTitle = styled.h1`
  color: #424242;
  font-family: Pretendard;
  margin-left: 15px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  align-self: flex-start; // BoxTitle만을 flex의 시작 부분에 정렬
`;

const BoxQuantity = styled.p`
  color: #fff;
  /* body 02 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

const Box = ({ volume, imageSource }) => {
  return (
    <BoxContainer className="component">
      <BoxTitle>{volume}</BoxTitle>
      <img
        src={imageSource}
        alt={volume}
        style={{ width: '50%', height: 'auto' }}
      />{' '}
      {/* 이미지 크기 조정 */}
      <CounterButton />
      <BoxQuantity>수량</BoxQuantity>
    </BoxContainer>
  );
};
// Prop validation using PropTypes
Box.propTypes = {
  volume: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Box;
