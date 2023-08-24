import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Home/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import loading from './assets/loading_icon.svg';
import api from '../../api/api';

const Loading = () => {
  // const [infoText, setInfoText] = useState('');

  // useEffect(() => {
  //   fetchRandomInfoText();
  // }, []);

  // const fetchRandomInfoText = () => {
  //   axios.get('').then((response) => {
  //     setInfoText(response.data);
  //     console.log(response.data);
  //   });
  // };

  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total;
  const gender = location.state?.gender;
  const [progress, setProgress] = useState(0);
  const [kcal, setKcal] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      try {
        const res = await api.post('/season/contribute', {
          amount: total,
          isMan: gender === 'male',
        });
        console.log(res.data.data);
        const { nowLevelPercent, workResult } = res.data.data;

        setProgress(nowLevelPercent);
        setKcal(workResult);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (progress && kcal) {
      setTimeout(() => {
        console.log(total, progress, kcal);
        navigate('/result', {
          state: {
            total,
            progress,
            kcal,
          },
        });
      }, 3000);
    }
  }, [progress, kcal]); // progress와 kcal 상태의 변경을 감지합니다.

  return (
    <>
      <Header />
      <Section>
        {/* {total}
        {gender} */}
        <img src={loading} />
        <h2>알고 계셨나요?</h2>
        {/* <p>{infoText}</p> */}
        <p>
          서울을 가로지르는 청계천은 긴 시간동안 오염되어 아스팔트로
          메워졌었습니다.
          <br />
          1900년대 후반 생태환경과 역사보존의 가치가 중요시되면서, 2005년
          복원사업
          <br />을 마친 후에야 지금과 같은 시민들의 휴식처로 탈바꿈했습니다!
        </p>
      </Section>
    </>
  );
};

export default Loading;

const Section = styled.div`
  background: linear-gradient(0deg, #dcffd9 0%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  p {
    margin-top: 0px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 200px;
    img {
      width: 30%;
    }
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
      text-align: center;
      width: 80%;
    }
  }
`;
