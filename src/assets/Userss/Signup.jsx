import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
});
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4040/user', formData); // Make sure db.json has "users": []
    console.log("✅ POST SUCCESS", response.data);
    alert('Registration successful!');
    setFormData({ name: '', email: '', password: '' });
    } catch (err) {
    console.log('❌ Error:', err);
    setError('Registration failed. Please try again.');
    } finally {
    setLoading(false);
    }
};

return (
    <div>
    <h2>Register</h2>

    {error && <p>{error}</p>}

    <form onSubmit={handleRegister}>
        <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        /><br />

        <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        /><br />

        <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        /><br />

        <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
        </button>
    </form>
    </div>
);
};

export default Signup;
