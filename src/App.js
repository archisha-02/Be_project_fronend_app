// // import logo from './logo.svg';
// // import React, { useState } from "react";
// // import './App.css';
// // import { Register } from './componenets/Register';
// // import { Login } from './componenets/Login';
// // import {Success} from './componenets/Success';
// // import {Patient} from '.components/Patient';

// // function App() {

// //   const [currentForm, setCurrentForm] = useState('login');

// //   const toggleForm = (formName) => {
// //     setCurrentForm(formName);
// //   }

// //   return (
// //     <div className="App">
// //       {
// //         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
// //       }
// //     </div>
// //   );

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/success" element={<HospitalManagementSuccessPage />} />
// //         <Route path="/login" element={<LoginPage />} />
// //         {/* Other routes if needed */}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }


// // export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Register } from './components/Register';
// import { Login } from './components/Login';
// import Success from './components/Success';
// import Patient from './components/Patient';
// import Landing from './components/Landing';
// import Dashboard from './components/Dashboard';



// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard component */}
//         <Route path="/patient" element={<Patient />} /> {/* Route for Patient component */}
//         <Route path="/success" element={<Success />} />
//         {/* Other routes if needed */}
//         <Route
//           path="/"
//           element={
//             <div className="App">
//               {currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} />
//               ) : (
//                 <Register onFormSwitch={toggleForm} />
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Register } from './components/Register';
// import { Login } from './components/Login';
// import Success from './components/Success';
// import Patient from './components/Patient';
// import Landing from './components/Landing'; // Import Landing component

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing page as the initial route */}
//         <Route path="/" element={<Landing />} />

//         <Route path="/patient" element={<Patient />} /> {/* Route for Patient component */}
//         <Route path="/success" element={<Success />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} /> Route for Dashboard component */}
//         {/* Routes for Login and Register (conditional rendering based on currentForm) */}
//         <Route
//           path="/login"
//           element={
//             <div className="App">
//               {currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} />
//               ) : (
//                 <Register onFormSwitch={toggleForm} />
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Register } from './components/Register'; // Import Register component
// import { Login } from './components/Login';
// import Success from './components/Success';
// import Patient from './components/Patient';
// import Landing from './components/Landing'; // Import Landing component

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing page as the initial route */}
//         <Route path="/" element={<Landing />} />

//         <Route path="/patient" element={<Patient />} /> {/* Route for Patient component */}
//         <Route path="/success" element={<Success />} />
//         {/* Route for registration.jsx */}
//         <Route path="/register" element={<Register />} /> {/* Add this line */}
//         {/* <Route path="/dashboard" element={<Dashboard />} /> Route for Dashboard component */}
//         {/* Routes for Login and Register (conditional rendering based on currentForm) */}
//         <Route
//           path="/login"
//           element={
//             <div className="App">
//               {currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} />
//               ) : (
//                 <Register onFormSwitch={toggleForm} />
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Register } from './components/Register'; // Import Register component
// import { Login } from './components/Login';
// import Success from './components/Success';
// import Patient from './components/Patient';
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";
// import View from "./components/View";
// import Upload from "./components/Upload";

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing page as the initial route */}
//         <Route path="/" element={<Landing />} />

//         {/* Routes for protected components accessible after login */}
//         <Route path="/dashboard" element={<Dashboard username="John Doe" />} /> {/* Add username prop */}
//         <Route path="/patient" element={<Patient />} /> {/* Route for Patient component */}
//         <Route path="/success" element={<Success />} />

//         {/* Route for registration.jsx */}
//         <Route path="/register" element={<Register />} /> {/* Add this line */}

//         {/* Routes for Login and Register (conditional rendering based on currentForm) */}
//         <Route
//           path="/login"
//           element={
//             <div className="App">
//               {currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} />
//               ) : (
//                 <Register onFormSwitch={toggleForm} />
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './components/Register'; // Import Register component
import { Login } from './components/Login';
import Success from './components/Success';
import Patient from './components/Patient';
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import View from "./components/View"; // Import View component
import UploadPatient from './components/Upload'; // Import Upload component (corrected name)

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page as the initial route */}
        <Route path="/" element={<Landing />} />

        {/* Routes for protected components accessible after login */}
        <Route path="/dashboard" element={<Dashboard username="John Doe" />} /> {/* Add username prop */}
        <Route path="/patient" element={<Patient />} /> {/* Route for Patient component */}
        <Route path="/view" element={<View />} /> {/* Route for View component with parameter */}
        <Route path="/upload" element={<UploadPatient />} /> {/* Route for UploadPatient component */}
        <Route path="/success" element={<Success />} />

        {/* Route for registration.jsx */}
        <Route path="/register" element={<Register />} /> {/* Add this line */}

        {/* Routes for Login and Register (conditional rendering based on currentForm) */}
        <Route
          path="/login"
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
