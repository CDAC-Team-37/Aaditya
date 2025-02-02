import React, { useState } from 'react';




const LoginSignUp = () => {
    return (
      <div>
        <div className="card-container" style={{
          display: 'grid',
          
          justifyContent: 'center',
          height: '650px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          margin: 'auto',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '100%',          
          alignContent: 'center'
        }}>
          {/* Login Card */}
          <div className="card" >
            <img src="images/login1.jpg" className="card-img-top" alt="login" />
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <p className="card-text">Already A Member?</p>
              <a href="Login" className="btn btn-primary">Login</a>
            </div>
          </div>
  
          {/* Sign Up Card */}
          <div className="card">
            <img src="images/signup.jpg" className="card-img-top" alt="signup" />
            <div className="card-body">
              <h5 className="card-title">Sign Up</h5>
              <p className="card-text">Not A Member Yet?</p>
              <a href="Signup" className="btn btn-primary">Sign Up</a>
            </div>
          </div>
        </div>
  
        
      </div>
    );
  };
  
  export default LoginSignUp;
  