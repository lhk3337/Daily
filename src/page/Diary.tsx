import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "store/modules";
import { elementDataType } from "store/types";

import { emotionList, emotionType } from "util/emotion";

const Diary = () => {
  const navigate = useNavigate();
  const diaryData = useSelector(({ diary }: RootState) => diary);
  const { id } = useParams();

  const userData = diaryData.find((it: elementDataType) => it.id === Number(id));
  useEffect(() => {
    if (!userData) {
      navigate("/", { replace: true });
    }
  }, [navigate, userData]);

  const content = userData?.content;
  const emotion = userData?.emotion;

  const emotionApi = emotionList.find((value: emotionType) => value.emotionId === emotion);

  const imgUrl = emotionApi?.imgUrl;
  const bgColor = emotionApi?.bgColor;
  const title = emotionApi?.title;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-[100px]">
        <h1 className="h1text">오늘의 감정</h1>
        <div className={`w-[250px] h-[250px] ${bgColor} flex flex-col rounded-[5px] items-center justify-around`}>
          <img src={imgUrl} alt={`emotion${emotion}`} />
          <div className="text-[25px] text-white">{title}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="h1text">오늘의 일기</h1>
        <div className="w-full bg-[#ececec] rounded-[5px]">
          <p className="p-[20px] leading-[2.5] text-[20px] font-normal my-[20px] font-['Yeon_Sung']">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Diary;
