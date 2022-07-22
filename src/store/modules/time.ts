// import { timeAction } from "store/types";
import { createAction, handleActions } from "redux-actions";
const PLUS = "PLUS" as const;
const MINUS = "MINUS" as const;

// export const plus = () => ({ type: PLUS });
// export const minus = () => ({ type: MINUS });

// export default function Diary(state: Date = new Date(), action: timeAction) {
//   switch (action.type) {
//     case PLUS:
//       return new Date(state.getFullYear(), state.getMonth() + 1, state.getDate());
//     case MINUS:
//       return new Date(state.getFullYear(), state.getMonth() - 1, state.getDate());
//     default:
//       return state;
//   }
// }

export const plus = createAction(PLUS);
export const minus = createAction(MINUS);

const initialState = new Date();
const Diary = handleActions(
  {
    [PLUS]: (state) => new Date(state.getFullYear(), state.getMonth() + 1, state.getDate()),
    [MINUS]: (state) => new Date(state.getFullYear(), state.getMonth() - 1, state.getDate()),
  },
  initialState
);
export default Diary;
