import React from 'react';
import recommendData from './recommend.json'; // recommendData로 이름 변경
import Header from '../../../Home/Header';
import Recommend from './Recommend';
import styles from './Recommends.module.css';

const Recommend3 = () => {
  const { background, minititle, title, address, content1, content2 } =
    recommendData.recommend[2];

  return (
    <div className={styles.container}>
      <Header />
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.bannerContent}>
          <h6 className={styles.minititle}>{minititle}</h6>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.address}>{address}</p>
        </div>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.contentText}>{content1}</p>
        <h3>코스 난이도</h3>
        <h6>중</h6>
        <h3>필요한 준비물</h3>
        <h6>쓰레기 봉투, 집게, 장갑, 손세정제, 강철 체력</h6>
        <h3>추천 코스</h3>
        <h6 className={styles.greenbox}>
          서울대 정문 미니스톱 편의점 - 관악산 공원 입구 - 호수공원 - 깔딱고개 -
          연주대 - 마당바위 - 낙성대
        </h6>
        <img
          className={styles.contentImage}
          src={content2}
          alt="Content Image"
        />
        <h3>다른 산도 추천받아 보세요.</h3>
        <div className={styles.recommendWrapper}>
          <Recommend />
        </div>
      </div>
    </div>
  );
};

export default Recommend3;