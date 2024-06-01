import React, { useState } from 'react';
import './ValleyPool.scss'; 
import Sidebar from '../../sidebar/Sidebar';
import Button from '../../common/button/Button';
import ValleyPoolForm from './ValleyPoolForm';

const ValleyPool = () => {
  const [formData, setFormData] = useState({
    brand: '',
    date: '',
    actualSales: '',
    transactionCount: '',
    writtenSales: ''
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Static data array
  const staticDataList = [
    {
      brand: 'Static Brand 1',
      date: '2024-06-01',
      actualSales: '1000',
      transactionCount: '50',
      writtenSales: '900'
    },
    {
      brand: 'Static Brand 2',
      date: '2024-06-02',
      actualSales: '1500',
      transactionCount: '70',
      writtenSales: '1400'
    }
  ];

  const handleChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const handleSubmit = (submittedFormData) => {
    setSubmittedDataList([...submittedDataList, submittedFormData]);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="valley-pool-container">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <div className="horizontal-container">
          <div className="pool-container">
            <div>
              <h1>Valley Pool</h1>
            </div>
            <div>
              <Button onClick={openModal}>Add Data</Button>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Date</th>
                  <th>Actual Sales</th>
                  <th>Transaction Count</th>
                  <th>Written Sales</th>
                </tr>
              </thead>
              <tbody>
                {staticDataList.map((data, index) => (
                  <tr key={`static_${index}`}>
                    <td>{data.brand}</td>
                    <td>{data.date}</td>
                    <td>{data.actualSales}</td>
                    <td>{data.transactionCount}</td>
                    <td>{data.writtenSales}</td>
                  </tr>
                ))}
                {submittedDataList.map((data, index) => (
                  <tr key={`submitted_${index}`}>
                    <td>{data.brand}</td>
                    <td>{data.date}</td>
                    <td>{data.actualSales}</td>
                    <td>{data.transactionCount}</td>
                    <td>{data.writtenSales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Render modal */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Enter The Data</h2>
                <ValleyPoolForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} onClose={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValleyPool;
