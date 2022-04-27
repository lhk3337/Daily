import { IFdata } from "types";
const DailyItem = ({ id, author, content, emotion, create_date }: IFdata) => {
  return (
    <li className="DailyItem">
      <div className="info__container">
        <div>작성자 : {author}</div>
        <div>감정 : {emotion}</div>
        <div className="date">시간 : {new Date(create_date).toLocaleString()}</div>
      </div>
      <div className="content">내용 : {content}</div>
    </li>
  );
};

export default DailyItem;
