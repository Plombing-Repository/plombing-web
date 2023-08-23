import React from 'react';
import styled from 'styled-components';

const NoSearchResult = () => {
  return <Container>검색 결과가 없습니다.</Container>;
};

export default NoSearchResult;

const Container = styled.div`
  margin: 30px 0px 60px 0px;
`;
