import React from "react";
import { emotionType } from "types/type";

const EmotionItem = ({ title, imgUrl, bgColor, onClick, emotionId, isSelected }: emotionType) => {
  return (
    <div
      className={`${
        !isSelected
          ? `flex rounded py-3 flex-col justify-center items-center cursor-pointer bg-[#ececec]`
          : `flex rounded py-3 flex-col justify-center items-center cursor-pointer ${bgColor} text-white`
      }`}
      onClick={() => onClick(emotionId)}
    >
      <img className="w-1/2 mb-[10px]" src={imgUrl} />
      <h1 className="text-[18px]">{title}</h1>
    </div>
  );
};

export default EmotionItem;
