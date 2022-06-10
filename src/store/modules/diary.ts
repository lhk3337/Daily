const INIT = "INIT";
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const EDIT = "EDIT";

const dummyData = [
  { id: 10, content: "오늘의 일기 0번", emotion: 3, date: 1650646723014 },
  { id: 11, content: "오늘의 일기 1번", emotion: 5, date: 1651656764897 },
  { id: 12, content: "오늘의 일기 2번", emotion: 1, date: 1652656786274 },
  { id: 13, content: "오늘의 일기 3번", emotion: 4, date: 1652756799088 },
  { id: 14, content: "오늘의 일기 4번", emotion: 2, date: 1653956810527 },
  { id: 15, content: "오늘의 일기 5번", emotion: 3, date: 1654242133171 },
];

export interface elementDataType {
  id: number;
  content?: string;
  emotion?: number;
  date: number;
}

interface actionType {
  type: string;
  data: { id: number; date: number; content: string; emotion: number };
  targetId?: number;
  date?: Date;
}

// 액션 생성 함수
let id = 1;

export const edit = (targetId: number, date: Date, content: string, emotion: number) => ({
  type: EDIT,
  data: { id: targetId, date: new Date(date).getTime(), content, emotion },
});

export const remove = (targetId: string) => ({ type: REMOVE, targetId: targetId });
export const create = (date: string, content: string, emotion: number): actionType => {
  return {
    type: CREATE,
    data: { id: id++, content: content, emotion: emotion, date: new Date(date).getTime() },
  };
};

export default function Diary(state: elementDataType[] = dummyData, action: actionType): any {
  let newState = [];
  switch (action.type) {
    case CREATE: {
      newState = [action.data, ...state];
      break;
    }
    case REMOVE: {
      newState = state.filter((it: elementDataType) => it.id !== action.targetId);
      break;
    }
    case EDIT: {
      newState = state.map((it: elementDataType) => (it.id === action.data.id ? { ...action.date } : it));
      break;
    }
    default:
      return state;
  }

  return newState;
}
