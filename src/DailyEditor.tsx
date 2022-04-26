import React, { useState, useRef } from "react";
const DailyEditor = () => {
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [emotion, setEmotion] = useState<number>(1);
  const authorInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);
  type Tobj = {
    author: string;
    content: string;
    emotion: number;
  };

  const obj: Tobj = {
    author: author,
    content: content,
    emotion: emotion,
  };

  const onSubmit = () => {
    console.log(obj);
    if (author.length < 1) {
      if (authorInput.current !== null) {
        authorInput.current.focus();
      }
      return;
    }
    if (content.length < 5) {
      if (contentInput.current !== null) {
        contentInput.current.focus();
      }
      return;
    }
    setAuthor("");
    setContent("");
    alert("저장 되었습니다.");
  };
  return (
    <div className="DiaryEditor">
      <h1>오늘의 일기</h1>
      <div>
        <input
          type="text"
          value={author}
          ref={authorInput}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} ref={contentInput} />
      </div>
      <div>
        <span>오늘의 감정 점수 </span>
        <select value={emotion} onChange={(e) => setEmotion(parseInt(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={onSubmit}>일기 저장하기</button>
    </div>
  );
};

export default DailyEditor;
