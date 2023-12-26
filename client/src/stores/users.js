import create from "zustand";
import axios from "axios";
const baseUrl = "http://localhost:8080/api/users";

const userStore = create((set) => ({
    users: [],
    fetchUsers: async () => {
	try {
	    const response = await axios.get(`${baseUrl}`);
	    if(response.data.success) {
		set((state) => ({users: response.data.data}));
	    }
	}
	catch (error) {
	    console.error("Error fetching users", error);
	}
    },
    setUsers: (listUsers) => {
	set((state) => ({users: listUsers}));
    },
    user: null,
    fetchUser: async (userId) => {
	try {
	    const response = await axios.get(`${baseUrl}/${userId}`);
	    set((state) => ({user: response.data}));
	}
	catch (error) {
	    console.error("Error fetching user details", error);
	}
    }
}));


export { userStore };
