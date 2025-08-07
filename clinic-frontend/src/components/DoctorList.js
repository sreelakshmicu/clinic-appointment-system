import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/doctors/')
      .then(res => setDoctors(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container doctor-list mt-5">
      <h2 className="text-center mb-4">👨‍⚕️ Available Doctors</h2>
      <div className="row">
        {doctors.map((doc) => (
          <div className="col-md-4 mb-4" key={doc.id}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">{doc.name}</h5>
                <p className="card-text">Speciality: {doc.speciality}</p>
                <p className="card-text">Department: {doc.department}</p>
                <Link 
                  to={`/book-appointment/${doc.id}`} // pass doctorId in URL
                  className="btn btn-primary mt-3"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
