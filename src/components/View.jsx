import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const [patient, setPatient] = useState(null);
  const { id } = useParams(); // Assuming the route includes a parameter for patient ID
  

  useEffect(() => {
    // Fetch patient details from backend API using the patient ID
    // Replace this with your actual API call
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`/api/patients/${id}`); // Example API endpoint
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.log('error');
        // console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Patient Details</h1>
      <div>
        <strong>Patient ID:</strong> {patient.id}<br />
        <strong>First Name:</strong> {patient.firstName}<br />
        <strong>Last Name:</strong> {patient.lastName}<br />
        <strong>Gender:</strong> {patient.gender}<br />
        <strong>Height:</strong> {patient.height}<br />
        <strong>Weight:</strong> {patient.weight}<br />
        <strong>Medical History:</strong> {patient.medicalHistory}<br />
        <strong>MRI Scan:</strong> <img src={patient.mriScanUrl} alt="MRI Scan" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default View;
