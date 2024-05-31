import React, { useState } from 'react';
import { TextField, Button, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import Sidebar from '../../sidebar/Sidebar';
import './ValleyPool.scss'; // Import the CSS file
const ValleyPool = () => {
  const [formData, setFormData] = useState({
    brand: '',
    date: '',
    actualSales: '',
    transactionCount: '',
    writtenSales: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // You can perform any additional actions here, like sending data to a server
  };
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Actual Sales"
            type="number"
            name="actualSales"
            value={formData.actualSales}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Transaction Count"
            type="number"
            name="transactionCount"
            value={formData.transactionCount}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Written Sales"
            type="number"
            name="writtenSales"
            value={formData.writtenSales}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        {submittedData && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actual Sales</TableCell>
                <TableCell>Transaction Count</TableCell>
                <TableCell>Written Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{submittedData.brand}</TableCell>
                <TableCell>{submittedData.date}</TableCell>
                <TableCell>{submittedData.actualSales}</TableCell>
                <TableCell>{submittedData.transactionCount}</TableCell>
                <TableCell>{submittedData.writtenSales}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};
export default ValleyPool;