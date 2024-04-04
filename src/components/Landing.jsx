import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <h1>Welcome to Our App</h1>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus sem quis leo pulvinar, nec aliquam sem fermentum. Maecenas ultrices mi sit amet augue fringilla eleifend. Aenean eu leo quam. Pellentesque lorem quam, vehicula vel, tempor eget, condimentum ac, magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit erat. Aenean eu leo quam. Pellentesque lorem quam, vehicula vel, tempor eget, condimentum ac, magna. (Replace with your actual About Us content)
      </p>
      <div className="button-container">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
