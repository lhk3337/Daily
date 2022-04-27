import { IDailyItemProps } from "types";
import { useState, useRef } from "react";

const DailyItem = ({ id, author, content, emotion, create_date, onDelClick, onEditClick }: IDailyItemProps) => {
  const [isEdit, setIsEdit] = useState(true);
  const [editContent, setEditContent] = useState<string>(content);

  const editContentInput = useRef<HTMLTextAreaElement>(null);
  const onEditCancel = () => {
    setIsEdit(true);
    setEditContent(content);
  };

  const onEditDone = () => {
    if (editContent.length < 5) {
      alert(`최소 입력 글자 수는 5보다 커야 됩니다. (현재 글자수 ${editContent.length})`);
      editContentInput.current?.focus();
      return;
    }
    if (window.confirm(`${editContent} 라고 수정하시겠습니까?`)) {
      onEditClick(id, editContent);
      setIsEdit(true);
    }
  };

  return (
    <li className="DailyItem">
      <div className="info__container">
        <div>작성자 : {author}</div>
        <div>감정 : {emotion}</div>
        <div className="date">시간 : {new Date(create_date).toLocaleString()}</div>
      </div>

      <div className="content">
        {isEdit ? (
          content
        ) : (
          <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} ref={editContentInput} />
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={() => onDelClick(id)}>삭제 하기</button>
          <button onClick={() => setIsEdit(!isEdit)}>수정하기</button>
        </>
      ) : (
        <>
          <button onClick={onEditCancel}>수정 취소</button>
          <button onClick={onEditDone}>수정 완료</button>
        </>
      )}
    </li>
  );
};

export default DailyItem;
