import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/catalog" ></Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default PageContent;
