import { useState, useRef } from "react";
import DailyEditor from "Components/DailyEditor";
import { IFdata } from "types";
import "styles/App.css";
import DailyList from "Components/DailyList";
import LifeCycle from "LifeCycle";

function App() {
  const [state, setState] = useState<IFdata[]>([]);
  const dateId = useRef(0);
  const createContent = (author: string, content: string, emotion: number) => {
    const create_date = new Date().getTime();
    const newItem: IFdata = {
      author,
      content,
      emotion,
      create_date,
      id: dateId.current,
    };
    dateId.current += 1;
    setState([newItem, ...state]);
  };

  const onDelClick = (id: number) => {
    setState(state.filter((item: IFdata) => item.id !== id));
  };
  const onEditClick = (id: number, newContent: string) => {
    setState(state.map((value: IFdata) => (value.id === id ? { ...value, content: newContent } : value)));
    // App의id와 DailyItem의 id가 같으면 content의 값을 DailyItem에서 수정한 값으로 교체 아니면 그대로 유지
  };
  return (
    <div className="App">
      <LifeCycle />
      <DailyEditor createContent={createContent} />
      <DailyList Fdata={state} onDelClick={onDelClick} onEditClick={onEditClick} />
    </div>
  );
}

export default App;
