import React from 'react';
import './Loading.css';

const Loading = ({ fileName }) => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>이미지 처리 중입니다...</p>
      {fileName && <p className="file-name">파일 이름: {fileName}</p>} {/* 파일 이름 표시 */}
    </div>
  );
};

export default Loading;