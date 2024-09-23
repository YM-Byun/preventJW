import React, { useEffect } from 'react';
import './Done.css';
import { useNavigate } from 'react-router-dom';

const Done = ({ reset, navigate }) => { // navigate prop 받기
  useEffect(() => {
    const handlePopState = () => {
      reset(); // 상태 초기화
      navigate('/'); // 메인 페이지로 이동
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, reset]);

  const handleGoBack = () => {
    reset(); // 파일 정보 초기화
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <div className="complete-container">
      <h1>기다려주셔서 감사합니다</h1>
      <p>곧 다운로드가 시작됩니다.</p>
      <p>다운로드가 안 될 경우 <a href="/download-file-url" id="download-link">여기</a>를 눌러주세요.</p>
      <button className="back-button" onClick={handleGoBack}>
        메인 화면으로 돌아가기
      </button>
    </div>
  );
};

export default Done;
