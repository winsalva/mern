import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userStore } from "../../stores/users";

const UserDetails = () => {
    const { id } = useParams();
    const { user, fetchUser } = userStore();

    // improve this one to handle errors from server
    if(user === null || user.data.id != id) {
	fetchUser(id);
    }
    
    return (
	<div>
	    <h1>USER DETAILS</h1>
	    {user ? (
		<div>
		    <h2>Name: { user.data.userName }</h2>
		    <p>Email: { user.data.email }</p>
		    <p>Password: { user.data.password }</p>
		</div>
	    ) : (
		<p>Loading...</p>
	    )}
	</div>
    );
}

export default UserDetails;
