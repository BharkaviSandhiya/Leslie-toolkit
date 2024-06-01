import React, { useEffect, useState } from 'react';
import './InternationalTub.scss'; 
import Sidebar from '../../sidebar/Sidebar';
import Button from '../../common/button/Button';
import Form from '../../common/form/Form';
import { CSVLink } from 'react-csv';
import 'boxicons'; // Import boxicons

const InternationalTub = () => {
  const [brand, setBrand] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    date: '',
    actualSales: '',
    transactionCount: '',
    writtenSales: ''
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const formatBrandName = (pathname) => pathname.replace('/', '').replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, char => char.toUpperCase());


  useEffect(() => {
    const pathname = window.location.pathname;
    const brandName = formatBrandName(pathname);
    setBrand(brandName);
    setFormData(prevState => ({
      ...prevState,
      brand: brandName
    }));
  }, []);

  // Static data array
  const staticDataList = [
    {
      brand: 'International HotTub',
      date: '2024-06-01',
      actualSales: '1000',
      transactionCount: '50',
      writtenSales: '900'
    },
    {
      brand: 'International HotTub',
      date: '2024-06-02',
      actualSales: '1500',
      transactionCount: '70',
      writtenSales: '1400'
    }
  ];

  const handleChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const csvData = [...staticDataList, ...submittedDataList];


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
    <div className="intenationaHotBrand-container">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <div className="horizontal-container">
          <div className="internationalbrand-container">
            <div>
              <h1> Brand - International HotTub</h1>
            </div>
            <div className="btn-modal">
              <CSVLink data={csvData} filename={`${brand.toLowerCase().replace(/\s+/g, '-')}-internationalTub.csv`}>
                <box-icon 
                  type='solid' 
                  name='cloud-download' 
                  color='#000' 
                  size='40px' 
                  style={{ cursor: 'pointer' }}
                ></box-icon>
              </CSVLink>
              <div>
              <Button onClick={openModal}>Add Data</Button>
              </div>
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
                <Form onSubmit={handleSubmit} onChange={handleChange}  formData={{ ...formData, brand }} onClose={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternationalTub;
