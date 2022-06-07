import React from "react";
import Edit from "page/Edit";
import Home from "page/Home";
import New from "page/New";
import Diary from "page/Diary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/Header";
const Routers = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route />
        </Routes>
      </>
    </Router>
  );
};

export default Routers;
