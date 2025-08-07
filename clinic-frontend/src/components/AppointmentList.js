import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/appointments/', {
      headers: { Authorization: `Token ${token}` }
    })
    .then(res => setAppointments(res.data))
    .catch(err => console.log('Error fetching appointments:', err));
  }, []);

  return (
    <div className="container doctor_appt mt-4">
      <h2 className="text-center mb-4">📅 My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-center">No appointments found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-primary">
              <tr>
                <th>Sl</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{appt.patient_name}</td>
                  <td>{appt.age}</td>
                  <td>{appt.appointment_date}</td>
                  <td>{appt.doctor_name || `Doctor ID: ${appt.doctor}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
