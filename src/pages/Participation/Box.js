import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // Import prop-types
import CounterButton from './CounterButton';

const BoxContainer = styled.div`
  width: 250px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 21.603px;
  background-color: #f8fff9;
  border: 1px solid #76e481;
  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.1) inset;
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

const ImageWrapper = styled.div`
  width: 50%;
  height: 125px;
  margin-bottom: 30px;
`;

const Box = ({
  volume,
  imageSource,
  count,
  setCount,
  total,
  setTotal,
  quantity,
}) => {
  return (
    <BoxContainer className="component">
      <BoxTitle>{volume}</BoxTitle>
      <ImageWrapper>
        <img
          src={imageSource}
          alt={volume}
          style={{ width: '100%', height: 'auto', marginBottom: '30px' }}
        />
      </ImageWrapper>
      {/* 이미지 크기 조정 */}
      <CounterButton
        count={count}
        setCount={setCount}
        total={total}
        setTotal={setTotal}
        quantity={quantity}
      />
    </BoxContainer>
  );
};
// Prop validation using PropTypes
Box.propTypes = {
  volume: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Box;
