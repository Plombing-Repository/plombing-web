import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 100%;
  background-color: #ffffff;
  width: 26px;
  height: 26px;
  border: 1px solid #ebebeb;
  cursor: pointer;
  &:active {
    background-color: #ebebeb;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 999px;
  box-shadow: 0px -5px 22px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 160px;
  height: 16px;
  flex-shrink: 0;
  margin-bottom: 30px;
`;

const CounterButton = ({ count, setCount, total, setTotal, quantity }) => {
  const handleDecrement = () => {
    if (count * 1 <= 0) return;
    setCount(count - 1);
    setTotal(total - quantity);
  };
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal(total + quantity);
  };
  return (
    <CounterContainer>
      <StyledButton onClick={handleDecrement} className="counter_button">
        -
      </StyledButton>
      <span>{count}</span>
      <StyledButton onClick={handleIncrement} className="counter_button">
        +
      </StyledButton>
    </CounterContainer>
  );
};

export default CounterButton;
