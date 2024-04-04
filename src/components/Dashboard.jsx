// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
// import Login from './Login.jsx';
// import Patient from './Patient.jsx';
// import View from './View.jsx';

// const Dashboard = ({ username }) => {
//   const handleLogout = () => {
//     // Handle logout logic here, e.g., clear local storage or session storage
//     // Redirect to login page
//     <Redirect to="/login" />;
//   };

//   return (
//     <Router>
//       <div>
//         {/* Navigation Bar */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <span className="navbar-brand">Welcome, {username}</span>
//           </div>
//         </nav>

//         {/* Sidebar */}
//         <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-3">
//               <ul className="list-group">
//                 <li className="list-group-item">
//                   <Link to="/Patient">Add New Patient</Link>
//                 </li>
//                 <li className="list-group-item">
//                   <Link to="/View">View Patients</Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Main Content Area */}
//             <div className="col-md-9">
//               <Switch>
//                 <Route path="/add-patient">
//                   <UploadPatient />
//                 </Route>
//                 <Route path="/view-patient">
//                   <View />
//                 </Route>
//                 <Route path="/patient/:id">
//                   <Patient />
//                 </Route>
//                 <Route path="/">
//                   <Redirect to="/add-patient" />
//                 </Route>
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import {BrowserRouter as Link, Router,Route, Routes} from "react-router-dom";

// import Login from './Login.jsx';
// import Patient from './Patient.jsx';
// import View from './View.jsx';
// // import Upload from './Upload.jsx';

// const Dashboard = ({ username }) => {
//   const handleLogout = () => {
//     // Handle logout logic here
//     // Redirect or navigate to the login page
//     // Example using navigate
//     // history.push('/login');
//   };

//   return (
//     <Router>
//       <div>
//         {/* Navigation Bar */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <span className="navbar-brand">Welcome, {username}</span>
//             <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//           </div>
//         </nav>

//         {/* Sidebar */}
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-3">
//               <ul className="list-group">
//                 <li className="list-group-item">
//                   <Link to="/add-patient">Add New Patient</Link>
//                 </li>
//                 <li className="list-group-item">
//                   <Link to="/view">View Patients</Link>
//                 </li>
//                 {/* <li className="list-group-item">
//                   <Link to="/upload">Upload Patient</Link>
//                 </li> */}
//               </ul>
//             </div>

//             {/* Main Content Area */}
//             <div className="col-md-9">
//               <Routes>
//                 <Route path="/add-patient">
//                   <Patient />
//                 </Route>
//                 <Route path="/view">
//                   <View />
//                 </Route>
//                 {/* <Route path="/upload">
//                   <Upload />
//                 </Route> */}
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';

// import Login from './Login.jsx';
// import Patient from './Patient.jsx';
// import View from './View.jsx';
// import Upload from './Upload.jsx';

// const Dashboard = ({ username }) => {
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   const handleLogout = () => {
//     // Handle logout logic here
//     // Redirect or navigate to the login page after logout
//     navigate('/login');
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand">Welcome, {username}</span>
//           <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <ul className="list-group">
//               <li className="list-group-item">
//                 <Link to="/add-patient">Add New Patient</Link>
//               </li>
//               <li className="list-group-item">
//                 <Link to="/view">View Patients</Link>
//               </li>
//               <li className="list-group-item">
//                 {/* Assuming you have an Upload component */}
//                 <Link to="/upload">Upload Patient Data</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Main Content Area */}
//           <div className="col-md-9">
//             <Outlet />
//             </div>
//           <div className="col-md-9">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// import { Link, Outlet, useNavigate } from 'react-router-dom';

// import Login from './Login.jsx';
// import Patient from './Patient.jsx';
// import View from './View.jsx';
// import Upload from './Upload.jsx';

// const Dashboard = ({ username }) => {
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   const handleLogout = () => {
//     // Handle logout logic here
//     // Redirect or navigate to the login page after logout
//     navigate('/login');
//   };

//   // Assuming you have a way to fetch recent patient data (API call or local storage)
//   const [recentPatients, setRecentPatients] = useState([]);

//   useEffect(() => {
//     // Fetch recent patient data here
//     // Replace with your actual data fetching logic (e.g., using fetch or an API library)
//     const fetchedPatients = [
//       { id: 1, firstName: 'John', lastName: 'Doe', notes: 'Sample notes' },
//       { id: 2, firstName: 'Jane', lastName: 'Smith', notes: 'Another sample note' },
//     ];
//     setRecentPatients(fetchedPatients);
//   }, []); // Empty dependency array to run the effect only once on component mount

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand">Welcome, {username}</span>
//           <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <ul className="list-group">
//               <li className="list-group-item">
//                 <Link to="/add-patient">Add New Patient</Link>
//               </li>
//               <li className="list-group-item">
//                 <Link to="/view">View Patients</Link>
//               </li>
//               <li className="list-group-item">
//                 {/* Assuming you have an Upload component */}
//                 <Link to="/upload">Upload Patient Data</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Main Content Area */}
//           <div className="col-md-9">
//             <div className="row">
//               {/* Recent Scans Box */}
//               <div className="col-md-6">
//                 <div className="card recent-scans">
//                   <div className="card-header">Recent Scans</div>
//                   <div className="card-body">
//                     {recentPatients.length === 0 ? (
//                       <p>No recent scans available.</p>
//                     ) : (
//                       <table className="table table-striped">
//                         <thead>
//                           <tr>
//                             <th scope="col">Patient ID</th>
//                             <th scope="col">First Name</th>
//                             <th scope="col">Last Name</th>
//                             <th scope="col">Notes</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {recentPatients.map((patient) => (
//                             <tr key={patient.id}>
//                               <td>{patient.id}</td>
//                               <td>{patient.firstName}</td>
//                               <td>{patient.lastName}</td>
//                               <td>{patient.notes}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Outlet for child components (Patient, View) */}
//               <div className="col-md-6">
//                 <Outlet />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';

// const Dashboard = ({ username }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   const handleProceed = () => {
//     navigate('/success');
//   };

//   const [recentPatients, setRecentPatients] = useState([]);

//   useEffect(() => {
//     const fetchedPatients = [
//       { id: 1, firstName: 'John', lastName: 'Doe', notes: 'Sample notes' },
//       { id: 2, firstName: 'Jane', lastName: 'Smith', notes: 'Another sample note' },
//     ];
//     setRecentPatients(fetchedPatients);
//   }, []);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand">Welcome, {username}</span>
//           <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <ul className="list-group">
//               <li className="list-group-item">
//                 <Link to="/add-patient">Add New Patient</Link>
//               </li>
//               <li className="list-group-item">
//                 <Link to="/view">View Patients</Link>
//               </li>
//               <li className="list-group-item">
//                 <Link to="/upload">Upload Patient Data</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="col-md-9">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="card recent-scans">
//                   <div className="card-header">Recent Scans</div>
//                   <div className="card-body">
//                     {recentPatients.length === 0 ? (
//                       <p>No recent scans available.</p>
//                     ) : (
//                       <table className="table table-striped">
//                         <thead>
//                           <tr>
//                             <th scope="col">Patient ID</th>
//                             <th scope="col">First Name</th>
//                             <th scope="col">Last Name</th>
//                             <th scope="col">Notes</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {recentPatients.map((patient) => (
//                             <tr key={patient.id}>
//                               <td>{patient.id}</td>
//                               <td>{patient.firstName}</td>
//                               <td>{patient.lastName}</td>
//                               <td>{patient.notes}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <Outlet />
//                 <button className="btn btn-primary" onClick={handleProceed}>Proceed</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Routes,Link } from "react-router-dom";
import Patient from './Patient';
import Upload from './Upload';
import View from './View';

const Dashboard = ({ username }) => {
  const handleLogout = () => {
    // Implement logout functionality

  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Welcome, {username}</span>
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/patient">Add New Patient</Link>
              </li>
              <li className="list-group-item">
                <Link to="/view">View Patients</Link>
              </li>
              <li className="list-group-item">
                <Link to="/upload">Upload Patients</Link>
              </li>
            
            </ul>
          </div>

        
          <div className="col-md-9">
         
            <Routes>
             
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;