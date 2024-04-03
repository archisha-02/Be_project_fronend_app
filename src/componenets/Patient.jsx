// import React, { useState } from 'react';

// const PatientRecord = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [height, setHeight] = useState(''); // Assuming height in cm
//   const [weight, setWeight] = useState(''); // Assuming weight in kg
//   const [medicalHistory, setMedicalHistory] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null); // State for displaying the uploaded image

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleHeightChange = (event) => {
//     setHeight(event.target.value);
//   };

//   const handleWeightChange = (event) => {
//     setWeight(event.target.value);
//   };

//   const handleMedicalHistoryChange = (event) => {
//     setMedicalHistory(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//     // Validate file type (MRI scan formats: PNG, JPG, SVG)
//     if (!file || !['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type)) {
//       alert('Please upload an MRI scan image (PNG, JPG, or SVG format).');
//       return;
//     }

//     setImageFile(file);
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => setImageUrl(reader.result);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Implement form submission logic here (e.g., send data to backend API)
//     const formData = new FormData();
//     formData.append('firstName', firstName);
//     formData.append('lastName', lastName);
//     formData.append('gender', gender);
//     formData.append('height', height);
//     formData.append('weight', weight);
//     formData.append('medicalHistory', medicalHistory);
//     if (imageFile) {
//       formData.append('mriScan', imageFile);
//     }

//     console.log('Patient record data:', formData); // Simulate submission
//     // Replace with actual API call and handle response
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           value={firstName}
//           onChange={handleFirstNameChange}
//           required
//         />
//         </div>
//         <div>
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={handleLastNameChange}
//             required
//             />
//         </div>
//         <div>
//             <label htmlFor="gender">Gender:</label>
//             <select id="gender" value={gender} onChange={handleGenderChange} required>
//             <option value="">-- Select Gender --</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//             </select>
//         </div>
//         <div>
//             <label htmlFor="Height">Height (cm):</label>
//             <input
//             type="number"
//             id="height"
//             value={height}
//             onChange={handleHeightChange}
//             required
//             />
//         </div>
//         <div>
//             <label htmlFor="Weight">Weight (kg):</label>
//             <input
//             type="number"
//             id="weight"
//             value={weight}
//             onChange={handleWeightChange}
//             required
//             />
//         </div>
//         <div>
//             <label htmlFor="MedicalHistory">Medical History:</label>
//             <textarea
//                 id="medicalHistory"
//                 value={medicalHistory}
//                 onChange={handleMedicalHistoryChange}
//                 required
//             ></textarea>
//             </div>
//             <div>
//                 <label htmlFor="MriScan">MRI Scan:</label>
//                 <input
//                     type="file"
//                     id="mriScan"
//                     accept="image/png, image/jpeg, image/svg+xml"
//                     onChange={handleImageChange}
//                 />
//                 {imageUrl && (
//                     <div>
//                     <h3>MRI Scan Preview</h3>
//                     <img src={imageUrl} alt="Uploaded MRI Scan" />
//                     </div>
//                 )}
//             </div>
//     </form>
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const Patient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate(); // Access the navigate object for navigation

  // Handle form input changes
  const handleFirstNameChange = (event) => { setFirstName(event.target.value); };
  const handleLastNameChange = (event) => { setLastName(event.target.value); };
  const handleGenderChange = (event) => { setGender(event.target.value); };
  const handleHeightChange = (event) => { setHeight(event.target.value); };
  const handleWeightChange = (event) => { setHeight(event.target.value); };
  const handleMedicalHistoryChange = (event) => { setMedicalHistory(event.target.value); };
  const handleImageChange = (event) => { const file = event.target.files[0];
        if (!file || !['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type)) {
          alert('Please upload an MRI scan image (PNG, JPG, or SVG format).');
          return; 
        };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic (e.g., API call) here

    // Redirect to the submission page upon successful input
    navigate.push('/success');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">First Name:</label>
         <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
            />
        </div>
        <div>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={handleGenderChange} required>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="Height">Height (cm):</label>
            <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            required
            />
        </div>
        <div>
            <label htmlFor="Weight">Weight (kg):</label>
            <input
            type="number"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            required
            />
        </div>
        <div>
            <label htmlFor="MedicalHistory">Medical History:</label>
            <textarea
                id="medicalHistory"
                value={medicalHistory}
                onChange={handleMedicalHistoryChange}
                required
            ></textarea>
            </div>
            <div>
                <label htmlFor="MriScan">MRI Scan:</label>
                <input
                    type="file"
                    id="mriScan"
                    accept="image/png, image/jpeg, image/svg+xml"
                    onChange={handleImageChange}
                />
                {imageUrl && (
                    <div>
                    <h3>MRI Scan Preview</h3>
                    <img src={imageUrl} alt="Uploaded MRI Scan" />
                    </div>
                )}
            </div>

      {/* Button to submit form */}
      <button type="submit">Submit</button>
    </form>
  );
}
};

export default Patient;

