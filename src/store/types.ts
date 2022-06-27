import { plus, minus } from "store/modules/time";

export type timeAction = ReturnType<typeof plus> | ReturnType<typeof minus>;

export interface elementDataType {
  id: number;
  content?: string;
  emotion?: number;
  date: number;
}

export interface actionType {
  type: string;
  data: { id: number; date: number; content: string; emotion: number };
  targetId?: number;
  date?: Date;
}
