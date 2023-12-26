import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:8080";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
	userName: "",
	email: "",
	password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
	setFormData({
	    ...formData,
	    [e.target.name]: e.target.value
	});
    };

    const handleSubmit = async (e) => {
	e.preventDefault();

	try {
	    const response = await axios.post(`${baseUrl}/api/users`, formData);

	    if(response.status === 201) {
		navigate("/");
	    }
	    else {
		console.log("User registration unsuccesful");
	    }
	}
	catch(e) {
	    console.error("Error", error);
	}
    }
    
    return (
	<>
	    <h1>New User</h1>
	    <form onSubmit={handleSubmit}>
		<label>Username</label>
		<input type="text" name="userName" value={formData.userName} onChange={handleChange} className="border border-gray-300 focus:border-blue-500" /><br />

		<label>Email</label>

		<input type="text" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300" /><br />

		<label>Password</label>

		<input type="text" name="password" value={formData.password} onChange={handleChange} className="border border-gray-300" /><br />

		<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Save</button>
	    </form>
	</>
    );
}

export { RegistrationForm };
