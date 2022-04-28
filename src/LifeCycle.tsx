import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("Update");
  });

  useEffect(() => {
    if (count > 5) {
      alert(`count가 5를 넘었습니다. 따라서 1초로 초기화 됩니다.`);
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text가 ${text.length}번 업데이트 되었습니다.`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default LifeCycle;
