import React from "react";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "./HeaderHome";
import HeaderNew from "./HeaderNew";
import HeaderDiary from "./HeaderDiary";
import HeaderEdit from "./HeaderEdit";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();

  const monthDate = useSelector(({ time }: any) => time);

  const editPath = matchPath<string, string>("/edit/:id", location.pathname);
  const diaryPath = matchPath<string, string>("/diary/:id", location.pathname);

  return (
    <header className="flex py-5 border-b border-[#e2e2e2] items-center  w-full">
      {location.pathname === "/" ? (
        <HeaderHome dispatch={dispatch} timedata={monthDate} />
      ) : location.pathname === "/new" ? (
        <HeaderNew Navi={navigation} />
      ) : diaryPath !== null ? (
        <HeaderDiary Navi={navigation} pathInfo={diaryPath} />
      ) : editPath !== null ? (
        <HeaderEdit Navi={navigation} location={location} />
      ) : null}
    </header>
  );
};

export default Header;
