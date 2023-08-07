import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 100%;
  background-color: #ffffff;
  border-color: #ffffff;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 799.139px;
  box-shadow: 0px -4.508937835693359px 22.544689178466797px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 210px;
  height: 20px;
  flex-shrink: 0;
  margin: auto;
`;

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterContainer>
      <StyledButton onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        -
      </StyledButton>
      <span>{count}</span>
      <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
    </CounterContainer>
  );
};

export default CounterButton;
