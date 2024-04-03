// import logo from './logo.svg';
// import React, { useState } from "react";
// import './App.css';
// import { Register } from './componenets/Register';
// import { Login } from './componenets/Login';
// import {Success} from './componenets/Success';
// import {Patient} from '.components/Patient';

// function App() {

//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/success" element={<HospitalManagementSuccessPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         {/* Other routes if needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// }


// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './componenets/Register';
import { Login } from './componenets/Login';
import Success from './componenets/Success';
import Patient from './componenets/Patient';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Patient" element={<Patient />} /> {/* Route for Patient component */}
        <Route path="/Success" element={<Success />} />
        {/* Other routes if needed */}
        <Route
          path="/"
          element={
            <div className="App">
              {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <Register onFormSwitch={toggleForm} />
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
