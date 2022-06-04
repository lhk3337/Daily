import React from "react";

interface Iprops {
  emotion: number;
  content: string;
  date: number;
}

const DiaryItem = ({ emotion, content, date }: Iprops) => {
  const emotionContainerColor = ["bg-[#64C965]", "bg-[#9DD772]", "bg-[#FECE15]", "bg-[#FD8446]", "bg-[#FD565F]"];
  return (
    <div>
      <div className={`${emotionContainerColor[emotion - 1]}`}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt={`emotion${emotion}`} />
      </div>
      <div>
        <h2>{new Date(date).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}</h2>
        <h1>{content}</h1>
      </div>
      <div>
        <button>수정하기</button>
      </div>
    </div>
  );
};

export default DiaryItem;
