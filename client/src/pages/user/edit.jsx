import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { userStore } from "../../stores/users";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/users";

const EditUser = () => {
    const { id } = useParams();
    const { user, fetchUser } = userStore();

    // improve this one to handle errors from serve
    
    const [formData, setFormData] = useState({
        userName: user.data.userName,
        email: user.data.email,
        password: user.data.password
    });
    
    
    // const { user, fetchUser, users } = userStore();

    // improve this one to handle errors from server
    
    useEffect(() => {
	const fetchUser = async () => {
	    try {
		if(user === null || user.data.id != id) {
		    fetchUser(id);
		}
		setFormData(user.data);
	    }
	    catch(e) {
		console.error("Error", e);
	    }
	}
	fetchUser()
    }, user);
    
    
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
            const response = await axios.put(`${baseUrl}/${id}`, formData);

            if(response.data.success) {
                navigate("/");
            }
            else {
                console.log("User registration unsuccesful");
            }
        }
        catch(e) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Edit User</h1>
	    <p>{JSON.stringify(user)}</p>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} className="border border-gray-300 focus:border-blue-500 px-2" /><br />

                <label>Email</label>

                <input type="text" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 px-2" /><br />

                <label>Password</label>

                <input type="text" name="password" value={formData.password} onChange={handleChange} className="border border-gray-300 px-2" /><br />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Save Update</button>
            </form>
       </>
    );
}

export { EditUser };
