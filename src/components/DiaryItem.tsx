import React from "react";
import { useNavigate } from "react-router-dom";

interface Iprops {
  emotion: number;
  content: string;
  date: number;
  id: number;
}

const DiaryItem = ({ emotion, content, date, id }: Iprops) => {
  const navi = useNavigate();
  const emotionContainerColor = ["bg-[#64C965]", "bg-[#9DD772]", "bg-[#FECE15]", "bg-[#FD8446]", "bg-[#FD565F]"];
  return (
    <div className="py-[15px] cursor-pointer flex justify-between border-b border-b-[#e4e4e4]">
      <div
        className={`${emotionContainerColor[emotion - 1]} rounded flex justify-center min-w-[120px] h-20`}
        onClick={() => navi(`/diary/${id}`)}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt={`emotion${emotion}`}
          className="w-1/2"
        />
      </div>
      <div className="flex-grow ml-5 cursor-pointer" onClick={() => navi(`/diary/${id}`)}>
        <h1 className="text-[25px] font-bold">{new Date(date).toLocaleDateString("ko-KR")}</h1>
        <h1 className="text-[18px]">{content}</h1>
      </div>
      <div>
        <button
          className="px-5 py-2 bg-[#ececec] text-[18px] rounded whitespace-nowrap"
          onClick={() => navi(`/edit/${id}`)}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
