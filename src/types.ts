export interface IFdata {
  author: string;
  content: string;
  emotion: number;
  create_date: number;
  id: number;
}
export interface onEvent {
  onDelClick: (id: number) => void;
  onEditClick: (id: number, newContent: string) => void;
}
export interface IDailyListprops extends onEvent {
  Fdata: IFdata[];
}

export interface IDailyItemProps extends IFdata, onEvent {}
