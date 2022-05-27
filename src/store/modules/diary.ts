const INIT = "INIT";
const CREATE = "CREATE";
const DELETE = "DELETE";
const EDIT = "EDIT";

type actionType = {
  type: string;
  data: { id: string };
  targetId: string;
  date: Date;
};

const data = [
  { id: 0, content: "오늘의 일기 0번", emotion: 3, date: 1653656723014 },
  { id: 1, content: "오늘의 일기 1번", emotion: 5, date: 1653656764897 },
  { id: 2, content: "오늘의 일기 2번", emotion: 1, date: 1653656786274 },
  { id: 3, content: "오늘의 일기 3번", emotion: 4, date: 1653656799088 },
  { id: 4, content: "오늘의 일기 4번", emotion: 2, date: 1653656810527 },
];

const initialState = {
  data,
};

export default function Diary(state: any = initialState, action: actionType) {
  let newState = [];
  switch (action.type) {
    case INIT:
      return state;
    case CREATE: {
      newState = [action.data, ...state];
      break;
    }

    case DELETE:
      newState = state.filter((it: any) => it.id !== action.targetId);
      break;
    case EDIT:
      newState = state.map((it: any) => (it.id === action.data.id ? { ...action.date } : it));
      break;
    default:
      return state;
  }
  return newState;
}
