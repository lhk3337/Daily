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

export default function Diary(state: [], action: actionType) {
  let newState = [];
  switch (action.type) {
    case INIT:
      return action.data;

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
