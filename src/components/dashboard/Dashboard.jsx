import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Dashboard.scss';
import DetailsImage from '../../assets/images/details.png'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="image-container">
        {/* Your image here */}
        <img src={DetailsImage} alt="Details" />
      </div>
    </div>
  );
}
export default Dashboard;