import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emotionList } from "util/emotion";
import { useNavigate } from "react-router-dom";
import { edit } from "store/modules/diary";
import { useParams } from "react-router-dom";
import { RootState } from "store/modules";
import { elementDataType } from "store/modules/diary";
import EmotionItem from "components/New/EmotionItem";
import { getStringDate } from "util/getDate";

const Edit = () => {
  const { id } = useParams();

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const contentRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [targetId, setTargetId] = useState<number>(0);
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState<number>(3);
  const [content, setContent] = useState<string>("");

  const diaryData = useSelector(({ diary }: RootState) => diary);

  useEffect(() => {
    if (diaryData.length >= 1) {
      const editItem = diaryData.find((value: elementDataType) => value.id === Number(id));
      if (editItem) {
        setDate(getStringDate(new Date(editItem.date)));
        setTargetId(editItem.id);
        setEmotion(editItem.emotion);
        setContent(editItem.content);
      } else {
        navigation("/", { replace: true });
      }
    }
  }, [id, diaryData]);
  const handleClickEmote = (emotion: any) => {
    setEmotion(emotion);
  };

  const onClickSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (window.confirm("수정 하시겠습니까?")) {
      dispatch(edit(targetId, date, content, emotion));
      navigation("/", { replace: true });
    }
  };

  return (
    <>
      <div className="mb-[40px]">
        <h1 className="h1text">오늘은 언제 인가요?</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-[20px] py-1.5 px-5 bg-[#ececec] rounded"
        />
      </div>
      <div className="mb-[40px]">
        <h1 className="h1text">오늘의 감정</h1>
        <div className="grid grid-cols-5 gap-[2%]">
          {emotionList.map((value, i) => (
            <EmotionItem key={i} {...value} onClick={handleClickEmote} isSelected={value.emotionId === emotion} />
          ))}
        </div>
      </div>
      <div className="mb-[40px]">
        <h1 className="h1text">오늘의 일기</h1>
        <textarea
          className="w-full bg-[#ececec] rounded-[5px] p-5 min-h-[200px] text-[20px]"
          placeholder="오늘은 어땠나요?"
          value={content}
          ref={contentRef}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-[40px]">
        <div className="flex justify-between items-center">
          <button className="grayBtn" onClick={() => navigation(-1)}>
            취소하기
          </button>
          <button className="grayBtn bg-[#64c964] text-white" onClick={onClickSubmit}>
            작성완료
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
