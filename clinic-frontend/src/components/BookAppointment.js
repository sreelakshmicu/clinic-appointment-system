import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BookAppointment.css';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const preselectedDoctorId = doctorId || '';

  const [formData, setFormData] = useState({
    patient_name: '',
    age: '',
    appointment_date: '',
    doctor: preselectedDoctorId,
  });

  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/doctors/')
      .then(res => setDoctors(res.data))
      .catch(err => console.error('Failed to fetch doctors:', err));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('❌ Please login to book an appointment.');
      return;
    }

    const appointmentData = {
      ...formData,
      doctor: Number(formData.doctor),
    };

    axios.post('http://localhost:8000/api/appointments/', appointmentData, {
      headers: { Authorization: `Token ${token}` },
    })
      .then(() => {
        setMessage('✅ Appointment booked successfully!');
        setFormData({
          patient_name: '',
          age: '',
          appointment_date: '',
          doctor: preselectedDoctorId,
        });
      })
      .catch(err => {
        if (err.response) {
          const errorDetails = JSON.stringify(err.response.data, null, 2);
          setMessage(`❌ Failed to book:\n${errorDetails}`);
        } else {
          setMessage('❌ An unexpected error occurred.');
        }
      });
  };

  return (
    <div className="container book_appt mt-5">
      <h2 className="text-center mb-4">🗓️ Book an Appointment</h2>

      {message && <div className="alert alert-info" style={{ whiteSpace: 'pre-wrap' }}>{message}</div>}

      <form className="shadow-lg p-4 rounded bg-white" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="patient_name" className="form-label">Patient Name</label>
          <input
            type="text"
            name="patient_name"
            className="form-control"
            value={formData.patient_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="appointment_date" className="form-label">Appointment Date</label>
          <input
            type="date"
            name="appointment_date"
            className="form-control"
            value={formData.appointment_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">Select Doctor_id</label>
          <select
            name="doctor"
            className="form-select"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose Doctor --</option>
            {doctors.map(doc => (
              <option key={doc.id} value={doc.id}>
                {doc.id} 
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Book Now</button>
      </form>
    </div>
  );
};

export default BookAppointment;
