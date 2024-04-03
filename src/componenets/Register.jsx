

// import React, { useState } from "react";

// export const Register = (props) => {
//     // const [email, setEmail] = useState('');
//     // const [pass, setPass] = useState('');
//     // const [name, setName] = useState('');

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     console.log(email);
//     //}
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [organization, setOrganization] = useState(''); // Added organization state
//     const [dateOfBirth, setDateOfBirth] = useState(''); // Added dateOfBirth state
//     const [gender, setGender] = useState(''); // Added gender state (initially empty)
//     const [pass, setPass] = useState('');
//     const [retypePass, setRetypePass] = useState(''); // Added retypePass state

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!email || !name || !pass || pass !== retypePass) {
//         alert('Please fill in all fields and ensure passwords match.');
//         return;
//         }

//         console.log('Email:', email);
//         console.log('Name:', name);
//         console.log('Organization:', organization); // Log organization if provided
//         console.log('Date of Birth:', dateOfBirth); // Log dateOfBirth if provided
//         console.log('Gender:', gender); // Log gender if provided
//         console.log('Password:', pass); 
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         {/* <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit">Log In</button>
//         </form> */}
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//             value={email} onChange={(e) => setEmail(e.target.value)}type="email" 
//             placeholder="youremail@gmail.com" id="email" name="email" required  // Add required attribute for validation
//             />
//             <label htmlFor="name">Full Name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)}
//             id="name" placeholder="Full Name" required  // Add required attribute for validation
//             />
//             <label htmlFor="dateOfBirth">Date of Birth</label>
//             <input type="date" id="dateOfBirth" name="dateOfBirth" required  // Add required attribute for validation
//             />
//             <label>Gender</label>
//             <div className="gender-radio">
//                 <input
//                 type="radio"
//                 id="male"
//                 name="gender"
//                 value="male"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="male">Male</label>
//                 <input
//                 type="radio"
//                 id="female"
//                 name="gender"
//                 value="female"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="female">Female</label>
//                 <input
//                 type="radio"
//                 id="Other"
//                 name="gender"
//                 value="Other"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="Other">Female</label>
//             </div>


//             <label htmlFor="organization">Organization</label>
//             <input
//                 value={organization}
//                 onChange={(e) => setOrganization(e.target.value)}
//                 id="organization"
//                 name="organization"
//                 placeholder="Organization Name"
//             />
//             <label htmlFor="designation">Designation</label>
//             <select id="designation" name="designation" required>  // Add required attribute
//             <option value="">-- Select Designation --</option>
//             <option value="admin">Admin</option>
//             <option value="nurse">Nurse</option>
//             <option value="doctor">Doctor</option>
//             <option value="healthcare">Healthcare Professional</option>
//             </select>

            
//             <label htmlFor="password">Password</label>
//             <input
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//                 type="password"
//                 placeholder="********"
//                 id="password"
//                 name="password"
//                 required  // Add required attribute for validation
//             />

            
//             <label htmlFor="retypePassword">Retype Password</label>
//             <input
//                 value={retypePass}
//                 onChange={(e) => setRetypePass(e.target.value)}
//                 type="password"
//                 placeholder="********"
//                 id="retypePassword"
//                 name="retypePassword"
//                 required  // Add required attribute for validation
//             />

//             <button type="submit">Register</button>
//             </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     );
// }




// import React, { useState } from "react";

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [organization, setOrganization] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [gender, setGender] = useState('');
//     const [pass, setPass] = useState('');
//     const [retypePass, setRetypePass] = useState('');
//     const [designation, setDesignation] = useState('');

//     // Admin-specific fields
//     const [role, setRole] = useState('');
//     const [department, setDepartment] = useState('');
//     const [institutionAddress, setInstitutionAddress] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     // Doctor-specific fields
//     const [universalId, setUniversalId] = useState('');
//     const [specialization, setSpecialization] = useState('');
//     const [doctorDepartment, setDoctorDepartment] = useState('');
//     const [yearsOfExperience, setYearsOfExperience] = useState('');

//     // Nurse-specific fields
//     const [nurseLicenseNumber, setNurseLicenseNumber] = useState('');
//     const [nurseDepartment, setNurseDepartment] = useState('');
//     const [qualification, setQualification] = useState('');
//     const [nursePhoneNumber, setNursePhoneNumber] = useState('');

//     // Healthcare specialist fields
//     const [healthcareLicenseNumber, setHealthcareLicenseNumber] = useState('');
//     const [areaOfExpertise, setAreaOfExpertise] = useState('');
//     const [healthcareDepartment, setHealthcareDepartment] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!email || !name || !pass || pass !== retypePass || !designation) {
//             alert('Please fill in all fields and ensure passwords match.');
//             return;
//         }

//         console.log('Email:', email);
//         console.log('Name:', name);
//         console.log('Organization:', organization);
//         console.log('Date of Birth:', dateOfBirth);
//         console.log('Gender:', gender);
//         console.log('Designation:', designation);
//         console.log('Password:', pass);

//         // Additional logging based on designation
//         if (designation === 'admin') {
//             console.log('Role:', role);
//             console.log('Department:', department);
//             console.log('Institution Address:', institutionAddress);
//             console.log('Phone Number:', phoneNumber);
//         } else if (designation === 'doctor') {
//             console.log('Universal ID:', universalId);
//             console.log('Specialization:', specialization);
//             console.log('Doctor Department:', doctorDepartment);
//             console.log('Years of Experience:', yearsOfExperience);
//         } else if (designation === 'nurse') {
//             console.log('Nurse License Number:', nurseLicenseNumber);
//             console.log('Nurse Department:', nurseDepartment);
//             console.log('Qualification:', qualification);
//             console.log('Nurse Phone Number:', nursePhoneNumber);
//         } else if (designation === 'healthcare') {
//             console.log('Healthcare License Number:', healthcareLicenseNumber);
//             console.log('Area of Expertise:', areaOfExpertise);
//             console.log('Healthcare Department:', healthcareDepartment);
//         }
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//             value={email} onChange={(e) => setEmail(e.target.value)}type="email" 
//             placeholder="youremail@gmail.com" id="email" name="email" required  // Add required attribute for validation
//             />
//             <label htmlFor="name">Full Name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)}
//             id="name" placeholder="Full Name" required  // Add required attribute for validation
//             />
//             <label htmlFor="dateOfBirth">Date of Birth</label>
//             <input type="date" id="dateOfBirth" name="dateOfBirth" required  // Add required attribute for validation
//             />
//             <label>Gender</label>
//             <div className="gender-radio">
//                 <input
//                 type="radio"
//                 id="male"
//                 name="gender"
//                 value="male"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="male">Male</label>
//                 <input
//                 type="radio"
//                 id="female"
//                 name="gender"
//                 value="female"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="female">Female</label>
//                 <input
//                 type="radio"
//                 id="Other"
//                 name="gender"
//                 value="Other"
//                 required  // Add required attribute for validation
//                 />
//                 <label htmlFor="Other">Female</label>
//             </div>


//             <label htmlFor="organization">Organization</label>
//             <input
//                 value={organization}
//                 onChange={(e) => setOrganization(e.target.value)}
//                 id="organization"
//                 name="organization"
//                 placeholder="Organization Name"
//             />

//                 {/* Designation selection */}
//                 <label htmlFor="designation">Designation</label>
//                 <select
//                     id="designation"
//                     name="designation"
//                     value={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
//                     required
//                 >
//                     <option value="">-- Select Designation --</option>
//                     <option value="admin">Admin</option>
//                     <option value="doctor">Doctor</option>
//                     <option value="nurse">Nurse</option>
//                     <option value="healthcare">Healthcare Professional</option>
//                 </select>

//                 {/* Additional fields based on designation */}
//                 {designation && designation === 'admin' && (
//                     <>
//                         <label htmlFor="role">Role</label>
//                         <input
//                             type="text"
//                             id="role"
//                             name="role"
//                             value={role}
//                             onChange={(e) => setRole(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="department">Department</label>
//                         <input
//                             type="text"
//                             id="department"
//                             name="department"
//                             value={department}
//                             onChange={(e) => setDepartment(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="institutionAddress">Institution Address</label>
//                         <input
//                             type="text"
//                             id="institutionAddress"
//                             name="institutionAddress"
//                             value={institutionAddress}
//                             onChange={(e) => setInstitutionAddress(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="phoneNumber">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phoneNumber"
//                             name="phoneNumber"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 {designation && designation === 'doctor' && (
//                     <>
//                     <label htmlFor="universalId">Universal ID Number</label>
//                         <input
//                             type="text"
//                             id="universalId"
//                             name="universalId"
//                             value={universalId}
//                             onChange={(e) => setUniversalId(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="specialization">Specialization</label>
//                         <input
//                             type="text"
//                             id="specialization"
//                             name="specialization"
//                             value={specialization}
//                             onChange={(e) => setSpecialization(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="doctorDepartment">Department</label>
//                         <input
//                             type="text"
//                             id="doctorDepartment"
//                             name="doctorDepartment"
//                             value={doctorDepartment}
//                             onChange={(e) => setDoctorDepartment(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="yearsOfExperience">Years of Experience</label>
//                         <input
//                             type="number"
//                             id="yearsOfExperience"
//                             name="yearsOfExperience"
//                             value={yearsOfExperience}
//                             onChange={(e) => setYearsOfExperience(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="doctorPhoneNumber">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="doctorPhoneNumber"
//                             name="doctorPhoneNumber"
//                             value={doctorPhoneNumber}
//                             onChange={(e) => setDoctorPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 {designation && designation === 'nurse' && (
//                     <>
//                         <label htmlFor="nurseLicenseNumber">Nurse License Number</label>
//                         <input
//                             type="text"
//                             id="nurseLicenseNumber"
//                             name="nurseLicenseNumber"
//                             value={nurseLicenseNumber}
//                             onChange={(e) => setNurseLicenseNumber(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="nurseDepartment">Department</label>
//                         <input
//                             type="text"
//                             id="nurseDepartment"
//                             name="nurseDepartment"
//                             value={nurseDepartment}
//                             onChange={(e) => setNurseDepartment(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="qualification">Qualification</label>
//                         <input
//                             type="text"
//                             id="qualification"
//                             name="qualification"
//                             value={qualification}
//                             onChange={(e) => setQualification(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="nursePhoneNumber">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="nursePhoneNumber"
//                             name="nursePhoneNumber"
//                             value={nursePhoneNumber}
//                             onChange={(e) => setNursePhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 {designation && designation === 'healthcare' && (
//                     <>
//                         <label htmlFor="healthcareLicenseNumber">License Number</label>
//                             <input
//                                 type="text"
//                                 id="healthcareLicenseNumber"
//                                 name="healthcareLicenseNumber"
//                                 value={healthcareLicenseNumber}
//                                 onChange={(e) => setHealthcareLicenseNumber(e.target.value)}
//                                 required
//                             />
//                             <label htmlFor="areaOfExpertise">Area of Expertise</label>
//                             <input
//                                 type="text"
//                                 id="areaOfExpertise"
//                                 name="areaOfExpertise"
//                                 value={areaOfExpertise}
//                                 onChange={(e) => setAreaOfExpertise(e.target.value)}
//                                 required
//                             />
//                             <label htmlFor="healthcareDepartment">Department</label>
//                             <input
//                                 type="text"
//                                 id="healthcareDepartment"
//                                 name="healthcareDepartment"
//                                 value={healthcareDepartment}
//                                 onChange={(e) => setHealthcareDepartment(e.target.value)}
//                                 required
//                             />
//                     </>
//                 )}

//                 {/* Your existing form fields */}
//                 {/* ... */}

//                 <button type="submit">Register</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
//                 Already have an account? Login here.
//             </button>
//         </div>
//     );
// }



import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organization, setOrganization] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');

    // Admin-specific fields
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [institutionAddress, setInstitutionAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [adminPass, setAdminPass] = useState('');
    const [adminRetypePass, setAdminRetypePass] = useState('');

    // Doctor-specific fields
    const [universalId, setUniversalId] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [doctorDepartment, setDoctorDepartment] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [doctorPhoneNumber, setDoctorPhoneNumber] = useState('');
    const [doctorPass, setDoctorPass] = useState('');
    const [doctorRetypePass, setDoctorRetypePass] = useState('');

    // Nurse-specific fields
    const [nurseLicenseNumber, setNurseLicenseNumber] = useState('');
    const [nurseDepartment, setNurseDepartment] = useState('');
    const [qualification, setQualification] = useState('');
    const [nursePhoneNumber, setNursePhoneNumber] = useState('');
    const [nursePass, setNursePass] = useState('');
    const [nurseRetypePass, setNurseRetypePass] = useState('');

    // Healthcare specialist fields
    const [healthcareLicenseNumber, setHealthcareLicenseNumber] = useState('');
    const [areaOfExpertise, setAreaOfExpertise] = useState('');
    const [healthcareDepartment, setHealthcareDepartment] = useState('');
    const [healthcarePass, setHealthcarePass] = useState('');
    const [healthcareRetypePass, setHealthcareRetypePass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and registration logic here
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
            value={email} onChange={(e) => setEmail(e.target.value)}type="email" 
            placeholder="youremail@gmail.com" id="email" name="email" required  // Add required attribute for validation
            />
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            placeholder="Enter First Name"
            required  // Add required attribute for validation
            />

            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            placeholder="Enter Last Name"
            required  // Add required attribute for validation
            />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required  // Add required attribute for validation
            />
            <label>Gender</label>
            <div className="gender-radio">
                <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required  // Add required attribute for validation
                />
                <label htmlFor="male">Male</label>
                <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required  // Add required attribute for validation
                />
                <label htmlFor="female">Female</label>
                <input
                type="radio"
                id="Other"
                name="gender"
                value="Other"
                required  // Add required attribute for validation
                />
                <label htmlFor="Other">Female</label>
            </div>


            <label htmlFor="organization">Organization</label>
            <input
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                id="organization"
                name="organization"
                placeholder="Organization Name"
            />
                {/* Designation selection */}
                <label htmlFor="designation">Designation</label>
                <select
                    id="designation"
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                >
                    <option value="">-- Select Designation --</option>
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="healthcare">Healthcare Professional</option>
                </select>

                {/* Additional fields based on designation */}
                {designation && designation === 'admin' && (
                    <>
                    <label htmlFor="role">Role</label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                        />
                        <label htmlFor="institutionAddress">Institution Address</label>
                        <input
                            type="text"
                            id="institutionAddress"
                            name="institutionAddress"
                            value={institutionAddress}
                            onChange={(e) => setInstitutionAddress(e.target.value)}
                            required
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        
                        <label htmlFor="adminPass">Password</label>
                        <input
                            type="password"
                            id="adminPass"
                            name="adminPass"
                            value={adminPass}
                            onChange={(e) => setAdminPass(e.target.value)}
                            required
                        />
                        <label htmlFor="adminRetypePass">Retype Password</label>
                        <input
                            type="password"
                            id="adminRetypePass"
                            name="adminRetypePass"
                            value={adminRetypePass}
                            onChange={(e) => setAdminRetypePass(e.target.value)}
                            required
                        />
                    </>
                )}
                {designation && designation === 'doctor' && (
                    <>
                        <label htmlFor="universalId">Universal ID Number</label>
                        <input
                            type="text"
                            id="universalId"
                            name="universalId"
                            value={universalId}
                            onChange={(e) => setUniversalId(e.target.value)}
                            required
                        />
                        <label htmlFor="specialization">Specialization</label>
                        <input
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            required
                        />
                        <label htmlFor="doctorDepartment">Department</label>
                        <input
                            type="text"
                            id="doctorDepartment"
                            name="doctorDepartment"
                            value={doctorDepartment}
                            onChange={(e) => setDoctorDepartment(e.target.value)}
                            required
                        />
                        <label htmlFor="yearsOfExperience">Years of Experience</label>
                        <input
                            type="number"
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            value={yearsOfExperience}
                            onChange={(e) => setYearsOfExperience(e.target.value)}
                            required
                        />
                        <label htmlFor="doctorPhoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="doctorPhoneNumber"
                            name="doctorPhoneNumber"
                            value={doctorPhoneNumber}
                            onChange={(e) => setDoctorPhoneNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="doctorPass">Password</label>
                        <input
                            type="password"
                            id="doctorPass"
                            name="doctorPass"
                            value={doctorPass}
                            onChange={(e) => setDoctorPass(e.target.value)}
                            required
                        />
                        <label htmlFor="doctorRetypePass">Retype Password</label>
                        <input
                            type="password"
                            id="doctorRetypePass"
                            name="doctorRetypePass"
                            value={doctorRetypePass}
                            onChange={(e) => setDoctorRetypePass(e.target.value)}
                            required
                        />
                    </>
                )}
                {designation && designation === 'nurse' && (
                    <>
                        <label htmlFor="nurseLicenseNumber">Nurse License Number</label>
                        <input
                            type="text"
                            id="nurseLicenseNumber"
                            name="nurseLicenseNumber"
                            value={nurseLicenseNumber}
                            onChange={(e) => setNurseLicenseNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="nurseDepartment">Department</label>
                        <input
                            type="text"
                            id="nurseDepartment"
                            name="nurseDepartment"
                            value={nurseDepartment}
                            onChange={(e) => setNurseDepartment(e.target.value)}
                            required
                        />
                        <label htmlFor="qualification">Qualification</label>
                        <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            required
                        />
                        <label htmlFor="nursePhoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="nursePhoneNumber"
                            name="nursePhoneNumber"
                            value={nursePhoneNumber}
                            onChange={(e) => setNursePhoneNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="nursePass">Password</label>
                        <input
                            type="password"
                            id="nursePass"
                            name="nursePass"
                            value={nursePass}
                            onChange={(e) => setNursePass(e.target.value)}
                            required
                        />
                        <label htmlFor="nurseRetypePass">Retype Password</label>
                        <input
                            type="password"
                            id="nurseRetypePass"
                            name="nurseRetypePass"
                            value={nurseRetypePass}
                            onChange={(e) => setNurseRetypePass(e.target.value)}
                            required
                        />
                    </>
                )}
                {designation && designation === 'healthcare' && (
                    <>
                        <label htmlFor="healthcareLicenseNumber">License Number</label>
                            <input
                                type="text"
                                id="healthcareLicenseNumber"
                                name="healthcareLicenseNumber"
                                value={healthcareLicenseNumber}
                                onChange={(e) => setHealthcareLicenseNumber(e.target.value)}
                                required
                            />
                            <label htmlFor="areaOfExpertise">Area of Expertise</label>
                            <input
                                type="text"
                                id="areaOfExpertise"
                                name="areaOfExpertise"
                                value={areaOfExpertise}
                                onChange={(e) => setAreaOfExpertise(e.target.value)}
                                required
                            />
                            <label htmlFor="healthcareDepartment">Department</label>
                            <input
                                type="text"
                                id="healthcareDepartment"
                                name="healthcareDepartment"
                                value={healthcareDepartment}
                                onChange={(e) => setHealthcareDepartment(e.target.value)}
                                required
                            />
                        <label htmlFor="healthcarePass">Password</label>
                        <input
                            type="password"
                            id="healthcarePass"
                            name="healthcarePass"
                            value={healthcarePass}
                            onChange={(e) => setHealthcarePass(e.target.value)}
                            required
                        />
                        <label htmlFor="healthcareRetypePass">Retype Password</label>
                        <input
                            type="password"
                            id="healthcareRetypePass"
                            name="healthcareRetypePass"
                            value={healthcareRetypePass}
                            onChange={(e) => setHealthcareRetypePass(e.target.value)}
                            required
                        />
                    </>
                )}

                {/* Your existing form fields */}
                {/* ... */}

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>
        </div>
    );
}
