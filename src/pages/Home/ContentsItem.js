import React from 'react';
import styled from 'styled-components';

const ContentsItem = (props) => {
  return (
    <Item>
      <img src={props.thumbnail} />
      <div>
        <Class>플로밍 컨텐츠</Class>
        <h3>{props.headline}</h3>
        <Description>{props.description}</Description>
        <Info>
          <p>{props.date}</p>
          <p>{props.creator}</p>
        </Info>
      </div>
    </Item>
  );
};

export default ContentsItem;

const Item = styled.div`
  width: 787px;
  height: 221px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  background: #fff;
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  img {
    width: 274px;
    height: 180px;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.2);
    margin-right: 35px;
    margin-top: 20px;
    margin-left: 27px;
  }
  h3 {
    margin-bottom: 4px;
    margin-top: 4px;
    font-size: 1.4rem;
    line-height: 180%;
  }
`;

const Class = styled.p`
  color: #3f3f3f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 4px;
  margin-top: 28px;
`;

const Description = styled.p`
  width: 419px;
  color: #3f3f3f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 15px;
  margin-top: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  color: #3f3f3f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 21px;
  p {
    margin-right: 26px;
    margin-top: 0;
    color: #1e1e1e;
  }
`;
