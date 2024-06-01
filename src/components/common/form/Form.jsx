import React from 'react';
import { func, object } from 'prop-types';
import Button from '../button/Button';
import './Form.scss';
const Form = ({ formData, onSubmit, onChange, onClose }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset the form data after submission
    onChange({
      brand: '',
      date: '',
      actualSales: '',
      transactionCount: '',
      writtenSales: ''
    });
  };
  return (
    <div>
      <form className="userForm" onSubmit={handleSubmit} id="user-form">
        <div className="row">
          <div className="col-md-5 col-sm-10 mt-1">
            <div className="form-group">
              <input
                name="brand"
                type="text"
                className="form-control"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-5 col-sm-10 mt-1">
            <div className="form-group">
              <input
                name="date"
                type="date"
                className="form-control"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-sm-10 mt-1">
            <div className="form-group">
              <input
                name="actualSales"
                type="text"
                className="form-control"
                placeholder="Actual Sales"
                value={formData.actualSales}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-5 col-sm-10 mt-1">
            <div className="form-group">
              <input
                name="transactionCount"
                type="text"
                className="form-control"
                placeholder="Transaction Count"
                value={formData.transactionCount}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-sm-10 mt-1">
            <div className="form-group">
              <input
                name="writtenSales"
                type="text"
                className="form-control"
                placeholder="Written Sales"
                value={formData.writtenSales}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <div className="save-container">
            <Button className="btn-save" size="medium" onClick={onClose}>
              Cancel
            </Button>
          </div>
          <div className="save-container">
            <Button type="submit" size="medium" className="btn-save">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
Form.propTypes = {
  formData: object.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  onClose: func.isRequired
};
export default Form;