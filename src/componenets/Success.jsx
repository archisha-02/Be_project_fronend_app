// import React, { useState } from 'react';

// const HospitalManagementSuccessPage = () => {
//     const [userEmail, setUserEmail] = useState('');

//     // State for MRI images
//     const [mriImages, setMriImages] = useState([]);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//     // State for prediction
//     const [prediction, setPrediction] = useState('');

//     // State for doctor's notes and prescription
//     const [doctorNotes, setDoctorNotes] = useState('');
//     const [doctorPrescription, setDoctorPrescription] = useState('');

//     const handleLogout = () => {
//         // Implement logout logic here
//         alert('Logout button clicked');
//     }

//     const handleImageSelect = (index) => {
//         setSelectedImageIndex(index);
//     }

//     const handlePredictionSubmit = () => {
//         // Implement prediction logic here
//         alert(`Prediction submitted: ${prediction}`);
//     }

//     const handleDoctorSubmit = () => {
//         // Implement doctor's notes and prescription submission logic here
//         alert(`Doctor's notes: ${doctorNotes}\nDoctor's prescription: ${doctorPrescription}`);
//     }

//     return (
//         <div className="hospital-management-success-page">
//             <nav className="navbar">
//                 <div className="navbar-item">
//                     <span>User Email:</span>
//                     <input
//                         type="email"
//                         value={userEmail}
//                         onChange={(e) => setUserEmail(e.target.value)}
//                         placeholder="Enter email"
//                     />
//                 </div>
//                 <button className="logout-btn" onClick={handleLogout}>Logout</button>
//             </nav>
//             <section className="mri-section">
//                 <h2>MRI Images</h2>
//                 <div className="mri-images-container">
//                     {mriImages.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`MRI Image ${index + 1}`}
//                             className={selectedImageIndex === index ? 'selected' : ''}
//                             onClick={() => handleImageSelect(index)}
//                         />
//                     ))}
//                 </div>
//             </section>
//             <section className="prediction-section">
//                 <h2>Prediction</h2>
//                 <input
//                     type="number"
//                     value={prediction}
//                     onChange={(e) => setPrediction(e.target.value)}
//                     placeholder="Enter prediction"
//                 />
//                 <button onClick={handlePredictionSubmit}>Submit Prediction</button>
//             </section>
//             <section className="doctor-section">
//                 <h2>Doctor's Input</h2>
//                 <div className="doctor-input-container">
//                     <div className="notes-section">
//                         <h3>Doctor's Notes</h3>
//                         <textarea
//                             value={doctorNotes}
//                             onChange={(e) => setDoctorNotes(e.target.value)}
//                             placeholder="Enter notes"
//                         ></textarea>
//                     </div>
//                     <div className="prescription-section">
//                         <h3>Doctor's Prescription</h3>
//                         <textarea
//                             value={doctorPrescription}
//                             onChange={(e) => setDoctorPrescription(e.target.value)}
//                             placeholder="Enter prescription"
//                         ></textarea>
//                     </div>
//                 </div>
//                 <button onClick={handleDoctorSubmit}>Submit Doctor's Input</button>
//             </section>
//         </div>
//     );
// }

// export default HospitalManagementSuccessPage;


import React, { useState } from 'react';

    const Success = () => {
    const [userEmail, setUserEmail] = useState('');

    // State for MRI images
    const [mriImages, setMriImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // State for prediction
    const [prediction, setPrediction] = useState('');

    // State for doctor's notes and prescription
    const [doctorNotes, setDoctorNotes] = useState('');
    const [doctorPrescription, setDoctorPrescription] = useState('');

    // Implement logout logic (e.g., call an API or redirect)
    const handleLogout = async () => {
        try {
        const response = await fetch('/api/logout', { method: 'POST' }); // Replace with your logout API endpoint
        if (response.ok) {
            // Redirect to login page or handle successful logout locally
            console.log('Logout successful!');
        } else {
            console.error('Logout failed!');
        }
        } catch (error) {
        console.error('Error during logout:', error);
        }
    };

    const handleImageSelect = (index) => {
        setSelectedImageIndex(index);
    };

    // Implement prediction logic (e.g., call a machine learning model API)
    const handlePredictionSubmit = async () => {
        if (!prediction) {
        alert('Please enter a prediction value.');
        return;
        }
        try {
        const response = await fetch('/api/prediction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prediction }),
        }); // Replace with your prediction API endpoint
        if (response.ok) {
            const data = await response.json();
            console.log('Prediction submitted successfully:', data);
        } else {
            console.error('Prediction submission failed!');
        }
        } catch (error) {
        console.error('Error during prediction submission:', error);
        }
    };

    // Implement doctor's notes and prescription submission logic (e.g., call an API to save data)
    const handleDoctorSubmit = async () => {
        if (!doctorNotes || !doctorPrescription) {
        alert('Please enter both doctor\'s notes and prescription.');
        return;
        }
        try {
        const response = await fetch('/api/doctor-input', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes: doctorNotes, prescription: doctorPrescription }),
        }); // Replace with your doctor input API endpoint
        if (response.ok) {
            const data = await response.json();
            console.log('Doctor\'s input submitted successfully:', data);
            setDoctorNotes(''); // Clear notes and prescription after successful submission
            setDoctorPrescription('');
        } else {
            console.error('Doctor\'s input submission failed!');
        }
        } catch (error) {
        console.error('Error during doctor input submission:', error);
        }
    };

    return (
        <div className="hospital-management-success-page">
        <nav className="navbar">
            <div className="navbar-item">
            <span>User Email:</span>
            <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
            />
            </div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
        <section className="mri-section">
            <h2>MRI Images</h2>
            <div className="mri-images-container">
            {mriImages.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`MRI Image ${index + 1}`}
                className={selectedImageIndex === index ? 'selected' : ''}
                onClick={() => handleImageSelect(index)}
                />
            ))}
            </div>
        </section>
        // ... (rest of the code)

    <section className="prediction-section">
    <h2>Prediction</h2>
    <input
        type="number"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
        placeholder="Enter prediction"
    />
    <button onClick={handlePredictionSubmit}>Submit Prediction</button>
    </section>
    <section className="doctor-section">
    <h2>Doctor's Input</h2>
    <div className="doctor-input-container">
        <div className="notes-section">
        <h3>Doctor's Notes</h3>
        <textarea
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            placeholder="Enter notes"
        />
        </div>
        <div className="prescription-section">
        <h3>Doctor's Prescription</h3>
        <textarea
            value={doctorPrescription}
            onChange={(e) => setDoctorPrescription(e.target.value)}
            placeholder="Enter prescription"
        />
        </div>
    </div>
    <button onClick={handleDoctorSubmit}>Submit Doctor's Input</button>
    </section>
    </div>
    );
    };

    export default Success;
