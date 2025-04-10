// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
// const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: ''
// });
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
// };

// const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//     const response = await axios.post('http://localhost:4040/user', data); 
//     console.log("POST SUCCESS", response.data);
//     alert('Registration successful!');
//     semData({ name: '', email: '', password: '' });
//     } catch (err) {
//     console.log('Error:', err);
//     setError('Registration failed. Please try again.');
//     } finally {
//     setLoading(false);
//     }
// };

// return (
//     <div>
//     <h2>Register</h2>

//     {error && <p>{error}</p>}

//     <form onSubmit={handleRegister}>
//         <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={data.name}
//         onChange={handleChange}
//         required
//         /><br />

//         <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={data.email}
//         onChange={handleChange}
//         required
//         /><br />

//         <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={data.password}
//         onChange={handleChange}
//         required
//         /><br />

//         <button type="submit" disabled={loading}>
//         {loading ? 'Signing up...' : 'Sign Up'}
//         </button>
//     </form>
//     </div>
// );
// };

// export default Signup;

