import React from "react";
import { useParams } from "react-router-dom";
const HeaderEdit = ({ Navi, location }: any) => {
  const { id } = useParams();
  console.log(id);
  console.log(location);
  return (
    <>
      <div className="w-3/12 justify-start flex">
        <button
          onClick={() => {
            Navi(-1);
          }}
          className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap"
        >
          &lt; 뒤로가기
        </button>
      </div>
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">일기 수정하기</h1>
      <div className="w-3/12 justify-end flex">
        <button className="px-5 py-2.5 bg-[#fd565f] rounded whitespace-nowrap text-white">삭제하기</button>
      </div>
    </>
  );
};

export default HeaderEdit;
