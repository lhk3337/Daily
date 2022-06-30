import React from "react";
import { INavi } from "types/type";
const HeaderNew = ({ Navi }: INavi) => {
  return (
    <>
      <div className="w-3/12 justify-start flex">
        <button
          onClick={() => {
            Navi(-1);
          }}
          className="grayBtn"
        >
          &lt; 뒤로가기
        </button>
      </div>
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">새 일기쓰기</h1>
    </>
  );
};

export default HeaderNew;
