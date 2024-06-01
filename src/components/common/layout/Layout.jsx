import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValleyPool from '../../brand/valleyPool/ValleyPool';
import "./Layout.scss";
import Login from '../../login/Login';
import Dashboard from '../../dashboard/Dashboard';
import AquaQuip from '../../brand/aquaQuip/AquaQuip';
import Oregon from '../../brand/oregon/Oregon';
import InternationalTub from '../../brand/internationalTub/InternationalTub';
import CapitalHotTub from '../../brand/capitalHotTub/CapitalHotTub';
import PoolCity from '../../brand/poolCity/PoolCity';
import SpringDance from '../../brand/springDance/SpringDance';
import SplashPool from '../../brand/splashPool/SplashPool';
import Stellar from '../../brand/stellar/Stellar';
import Horizon from '../../brand/horizon/Horizon';
const Layout = () => {
  return (
    <div id="toolkit_full_page" className="AppRoot-fullPage">
      <div className="ToolMain_toolPage">
        <div className="tool_main_body" id="tool_main">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/valley-pool" element={<ValleyPool />} />
            <Route path="/aqua-quip" element={<AquaQuip />} />
            <Route path="/oregon-hot-tub" element={<Oregon />} />
            <Route path="/international-hottub" element={<InternationalTub />} />
            <Route path="/capital-hot-tub" element={<CapitalHotTub />} />
            <Route path="/pool-city" element={<PoolCity />} />
            <Route path="/spring-dance" element={<SpringDance />} />
            <Route path="/splash-pools-and-spa" element={<SplashPool />} />
            <Route path="/stellar" element={<Stellar />} />
            <Route path="/horizon" element={<Horizon />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Layout;









