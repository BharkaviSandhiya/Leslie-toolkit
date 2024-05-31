import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import ValleyPool from '../../brand/valleyPool/ValleyPool';
import "./Layout.scss";
import Login from '../../login/Login';
const Layout = () => {
  return (
    <div id="toolkit_full_page" className="AppRoot-fullPage">
      {/* <Sidebar /> */}
      <div className="ToolMain_toolPage">
        <div className="tool_main_body" id="tool_main">
          <Routes>
            <Route path="/" element={<Login/>} />
            {/* <Route element={<Sidebar/>} /> */}
            <Route path="/valley-pool" element={<ValleyPool />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Layout;









