import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log('파일 업로드됨:', file.name);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      console.log('파일 업로드됨:', file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h1 className="site-title">Prevent-JW</h1>
      <p className="site-introduce">딥 페이크를 방지하는 필터를 적용하는 사이트 입니다.</p>
      <p className="guide-text">필터 적용을 원하는 사진을 업로드 해주세요</p>
      
      <label className="file-input-label">
        파일 선택
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="file-input" 
        />
      </label>
      
      <div className="drop-area">
        <p><center>여기로 파일을 드래그 앤 드롭하세요!</center></p>
      </div>
      
      {fileName && <p className="file-name">업로드된 파일: {fileName}</p>}
    </div>
  );
};

export default App;