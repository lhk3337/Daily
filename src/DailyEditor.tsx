import React, { useState } from "react";
const DailyEditor = () => {
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  const [state, setState] = useState({
    author: "",
    content: "",
  });
  const onReset = () => {
    setState({ author: "", content: "" });
  };

  return (
    <div className="DailyEditor">
      <h1>오늘의 일기</h1>
      <div className="container">
        <input
          type="text"
          value={state.author}
          onChange={(e) => {
            setState({ ...state, author: e.target.value });
          }}
        />
        <textarea value={state.content} onChange={(e) => setState({ ...state, content: e.target.value })} />
        <button onClick={onReset}>초기화</button>
      </div>
      <div>{state.author}</div>
      <div>{state.content}</div>
    </div>
  );
};

export default DailyEditor;
