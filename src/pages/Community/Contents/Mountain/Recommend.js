import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import articles from '../Article/articles.json';
import PrevArrow from '../Article/assets/prev_btn.svg';
import NextArrow from '../Article/assets/next_btn.svg';

const RecommendItem = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 500 ? 3 : 1,
    slidesToScroll: 1,
  };

  const slickRef = useRef(null);
  const onClickItem = useCallback((index) => {
    window.location.href = `/recommend/${index}`;
  }, []);
  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <Wrap>
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} />
      </PrevBtn>
      <Slider ref={slickRef} {...settings}>
        {articles.articles.map((article) => (
          <Item
            key={article.id}
            onClick={() => {
              onClickItem(article.id);
            }}
          >
            <InfoBox>
              <Title>인왕산 B코스</Title>
              <Address>서울 종로구 무악동 산2-1</Address>
              <Info>
                <div>
                  <p>중급</p>
                </div>
                <div>
                  <p>4시간</p>
                </div>
              </Info>
            </InfoBox>
          </Item>
        ))}
      </Slider>
      <NextBtn onClick={nextArrow}>
        <img src={NextArrow} />
      </NextBtn>
    </Wrap>
  );
};

export default RecommendItem;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  .slick-slider,
  .slick-list,
  .slick-track {
    height: 328px !important;
  }
  .slick-slider {
    max-width: 100vw;
    width: 100%;
    overflow: hidden !important;
  }
  .slick-list {
    width: 746px;
    height: 308px;
    @media screen and (max-width: 500px) {
      max-width: 246px;
    }
  }
  .slick-prev::before,
  .slick-next:before {
    opacity: 0;
    display: none;
  }
`;

const PrevBtn = styled.button`
  position: relative;
  left: 0;
  border: none;
  background-color: white;
  margin-right: 36px;
`;

const NextBtn = styled.button`
  right: 0;
  border: none;
  background-color: white;
  margin-left: 36px;
`;
// 높이 조절 시 Item의 height, InfoBox의 height을 조절하기
const Item = styled.div`
  width: 228px !important;
  height: 288px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/0fbf0b07-a13e-4a8d-9679-483ad3081f17/image.svg');
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const InfoBox = styled.div`
  width: 230px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin-top: 0;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Address = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 4px;
  margin-bottom: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
  }
  div {
    width: 60px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:first-child {
      margin-right: 8px;
    }
  }
`;
