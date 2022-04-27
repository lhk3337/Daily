import { IFdata } from "types";
interface Iprops extends IFdata {
  data: IFdata[];
  setState: React.Dispatch<React.SetStateAction<IFdata[]>>;
}
const DailyItem = ({ id, author, content, emotion, create_date, data, setState }: Iprops) => {
  const onDelClick = (id: number) => {
    setState(data.filter((item: IFdata) => item.id !== id));
  };
  return (
    <li className="DailyItem">
      <div className="info__container">
        <div>작성자 : {author}</div>
        <div>감정 : {emotion}</div>
        <div className="date">시간 : {new Date(create_date).toLocaleString()}</div>
      </div>
      <div className="content">내용 : {content}</div>
      <button onClick={() => onDelClick(id)}>삭제 하기</button>
    </li>
  );
};

export default DailyItem;
