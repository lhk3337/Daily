import Edit from "page/Edit";
import Home from "page/Home";
import New from "page/New";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
const Routers = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route />
        </Routes>
      </>
    </Router>
  );
};

export default Routers;
