import React from "react";

const HeaderDiary = ({ Navi, pathInfo }: any) => {
  const {
    params: { id },
  } = pathInfo;

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
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">일기 기록</h1>
      <div className="w-3/12 justify-end flex">
        <button
          onClick={() => {
            Navi(`/edit/${id}`);
          }}
          className="grayBtn"
        >
          수정하기
        </button>
      </div>
    </>
  );
};

export default HeaderDiary;
