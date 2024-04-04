// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // For navigation (optional)

// const UploadPatient = () => {
//   const [patientId, setPatientId] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const history = useHistory(); // For navigation (optional)

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'patientId':
//         setPatientId(value);
//         break;
//       case 'firstName':
//         setFirstName(value);
//         break;
//       case 'lastName':
//         setLastName(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Implement logic to send data to your backend API
//     const formData = new FormData();
//     formData.append('patientId', patientId);
//     formData.append('firstName', firstName);
//     formData.append('lastName', lastName);
//     formData.append('scan', selectedFile);

//     const response = await fetch('/api/patients', {
//       method: 'POST',
//       body: formData,
//     });

//     if (!response.ok) {
//       console.error('Error uploading patient data:', response.statusText);
//       return; // Handle errors appropriately
//     }

//     // Handle successful upload (e.g., redirect to success page or dashboard)
//     console.log('Patient data uploaded successfully!');
//     history.push('/dashboard'); // Redirect to dashboard (optional)
//   };

//   return (
//     <div className="upload-form">
//       <h2>Upload Patient Data</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="patientId">Patient ID:</label>
//         <input
//           type="text"
//           id="patientId"
//           name="patientId"
//           value={patientId}
//           onChange={handleInputChange}
//           required
//         />
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={handleInputChange}
//           required
//         />
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={lastName}
//           onChange={handleInputChange}
//           required
//         />
//         <label htmlFor="scan">MRI Scan (jpg, png, svg):</label>
//         <input
//           type="file"
//           id="scan"
//           name="scan"
//           onChange={handleFileChange}
//           accept="image/jpeg,image/png,image/svg+xml" // Accept specific image formats
//           required
//         />
//         <button type="submit">Upload Patient</button>
//       </form>
//     </div>
//   );
// };

// export default UploadPatient;


import React, { useState } from 'react';
// **Import useNavigate instead of useHistory**
import { useNavigate } from 'react-router-dom';

const UploadPatient = () => {
  const [patientId, setPatientId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // **Use useNavigate hook**
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'patientId':
        setPatientId(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to send data to your backend API
    const formData = new FormData();
    formData.append('patientId', patientId);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('scan', selectedFile);

    const response = await fetch('/api/patients', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('Error uploading patient data:', response.statusText);
      return; // Handle errors appropriately
    }

    // Handle successful upload (e.g., redirect to success page or dashboard)
    console.log('Patient data uploaded successfully!');
    // **Use navigate hook for redirection**
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="upload-form">
      <h2>Upload Patient Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientId">Patient ID:</label>
        <input
          type="text"
          id="patientId"
          name="patientId"
          value={patientId}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="scan">MRI Scan (jpg, png, svg):</label>
        <input
          type="file"
          id="scan"
          name="scan"
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/svg+xml" // Accept specific image formats
          required
        />
        <button type="submit">Upload Patient</button>
      </form>
    </div>
  );
};

export default UploadPatient;

