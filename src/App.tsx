import { useState, useRef } from "react";
import DailyEditor from "Components/DailyEditor";
import { IFdata } from "types";
import "./App.css";
import DailyList from "Components/DailyList";

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
  return (
    <div className="App">
      <DailyEditor createContent={createContent} />
      <DailyList Fdata={state} />
    </div>
  );
}

export default App;
