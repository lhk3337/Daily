import React, { useState } from "react";
const DailyEditor = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const onReset = () => {
    setAuthor("");
    setContent("");
  };

  return (
    <div className="DailyEditor">
      <h1>오늘의 일기</h1>
      <div className="container">
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <textarea value={author} onChange={(e) => setContent(e.target.value)} />
        <button onClick={onReset}>초기화</button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default DailyEditor;
