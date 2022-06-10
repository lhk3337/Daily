import React from "react";
interface emotionType {
  id: any;
  title: string;
  imgUrl: string;
  bgColor: string;
  onClick: any;
  isSelected: boolean;
}
const EmotionItem = ({ title, imgUrl, bgColor, onClick, id, isSelected }: emotionType) => {
  return (
    <div
      className={`${
        !isSelected
          ? `flex rounded py-3 flex-col justify-center items-center cursor-pointer bg-[#ececec]`
          : `flex rounded py-3 flex-col justify-center items-center cursor-pointer ${bgColor} text-white`
      }`}
      onClick={() => onClick(id)}
    >
      <img className="w-1/2 mb-[10px]" src={imgUrl} />
      <h1 className="text-[18px]">{title}</h1>
    </div>
  );
};

export default EmotionItem;
