import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 644px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #99e28d;
  background: #fff;
  box-shadow: 0px 0px 44px 0px #99e28c;
  color: #424242;
  font-family: 'Pretendard', sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.4px;
  letter-spacing: -0.497px;
  margin-top: 32px;
`;

const Button = () => {
  return (
    <div>
      <StyledButton type="button">다음</StyledButton>
    </div>
  );
};

export default Button;
