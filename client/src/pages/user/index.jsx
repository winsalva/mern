import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../../stores/users";
import axios from "axios";

const baseUrl = "http://localhost:8080";

export function Index() {
    const { users, fetchUsers, setUsers } = userStore();
 
    useEffect(() => {
	fetchUsers();
    }, []);
   
    const handleDeleteUser = async (userId) => {
	try {
	    const response = await axios.delete(`${baseUrl}/api/users/${userId}`);
	    if(response.status === 200) {
		const updatedUsers = users.filter(user => user.id !== userId);
		setUsers(updatedUsers);
	    }
	    else {
		console.error("Failed to delete user!");
	    }
	}
	catch(error) {
	    console.error("Error: ", error);
	}
    }
       
    return (
	<div>
	    <h1 className="text-red-500">LISTING USERS</h1>
	    {users.length > 0 ? (
		<ul>
		    {users.map(user =>
			(<li className="text-black-500" key={user.id}> <Link to={`/users/${user.id}`}>{user.userName}</Link> - <button onClick={() => handleDeleteUser(user.id)}>Delete</button> - <Link to={`/users/${user.id}/edit`}>Edit User</Link></li>)
		    )}
		</ul>
	    ) : (
		<p>List is empty!</p>
	    )}
	</div>
    );
}
	    
