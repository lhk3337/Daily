import React, { Dispatch, SetStateAction } from "react";
import { PathMatch } from "react-router-dom";
import { AppDispatch } from "index";

export interface IoptionList {
  value: string;
  name: string;
}
export interface IControlType {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  optionList: IoptionList[];
}

export interface IsortedList {
  content: string;
  date: number;
  emotion: number;
  id: number;
}

export interface emotionType {
  emotionId: number;
  title: string;
  imgUrl: string;
  bgColor: string;
  onClick: (emotion: number) => void;
  isSelected: boolean;
}

export interface Idispatch {
  dispatch: AppDispatch;
}

export interface IHeaderDiaryProps {
  Navi: any;
  pathInfo: PathMatch<string>;
}
