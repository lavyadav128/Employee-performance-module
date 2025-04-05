import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/employees', employee);
      alert('Employee saved successfully!');
      handleCancel(); // Reset form
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to save employee');
    }
  };

  const handleCancel = () => {
    setEmployee({ firstName: '', lastName: '', email: '', mobile: '' });
  };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Add Employee</h2>
      <input
        name="firstName"
        placeholder="First Name"
        value={employee.firstName}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <input
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <input
        name="mobile"
        placeholder="Mobile Number"
        value={employee.mobile}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '20px', padding: '10px' }}
      />
      <button onClick={handleSave} style={{ marginRight: '10px' }}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default App;
