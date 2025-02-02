import React, { useState } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';


const Signup = () => {
  const [userType, setUserType] = useState(''); // Client or Vendor selection
  const [services, setServices] = useState([]); // To store selected services (Vendor form)

  // Handle user type change (Client or Vendor)
  const handleUserTypeChange = (type) => {
    setUserType(type);
    setServices([]); // Reset services if switching between forms
  };

  // Handle service selection (Checkbox)
  const handleServiceChange = (event) => {
    const { value, checked } = event.target;

    // If checked, add service; otherwise, remove it from the array
    setServices((prevServices) => {
      if (checked) {
        return [...prevServices, value]; // Add service if checked
      } else {
        return prevServices.filter(service => service !== value); // Remove service if unchecked
      }
    });
  };

  return (
    <div className="body-contentS">
      {/* Hero Section */}
      <div className="hero-sectionS">
        <div className="hero-textS">
          <h1>Welcome to the Sign up Platform</h1>
          <p> Sign up as a Client or Vendor to get started.</p>
          <Button variant="warning" href="#signup" className="cta-button-left">
            Go to Signup Form
          </Button>
        </div>
      </div>

     

      {/* Signup Container */}
      <div id="signup" className="signup-containerS">
        <h2>SIGN UP</h2>

        {/* Dropdown to choose between Client and Vendor */}
        <DropdownButton
          id="dropdown-user-type"
          title="Select User Type"
          onSelect={handleUserTypeChange}
          className="dropdown-button mb-3"
        >
          <Dropdown.Item eventKey="client">Client</Dropdown.Item>
          <Dropdown.Item eventKey="vendor">Vendor</Dropdown.Item>
        </DropdownButton>

        {/* Render Client form */}
        {userType === 'client' && (
          <Form>
            <Form.Group controlId="Name">
              <Form.Label>Groom Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Groom's Name" required />
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Bride Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Bride's Name" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Contact Number" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="signup-button">Sign Up</Button>
          </Form>
        )}

        {/* Render Vendor form */}
        {userType === 'vendor' && (
          <Form>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Contact Number" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" required/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Services Provided</Form.Label>
              <div>
                {/* List of checkboxes for services */}
                <Form.Check
                  type="checkbox"
                  label="Hall"
                  value="hall"
                  checked={services.includes('hall')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Decorator"
                  value="decorator"
                  checked={services.includes('decorator')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Catering"
                  value="catering"
                  checked={services.includes('catering')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Waiters"
                  value="waiters"
                  checked={services.includes('waiters')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Photographers"
                  value="photographers"
                  checked={services.includes('photographers')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Music"
                  value="music"
                  checked={services.includes('music')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Pandit Ji"
                  value="panditji"
                  checked={services.includes('panditji')}
                  onChange={handleServiceChange}
                />
              </div>
              </Form.Group>

            <Button variant="primary" type="submit" className="signup-buttonS">Sign Up</Button>
          </Form>
        )}
      </div>

      
    </div>
  );
};

export default Signup;
