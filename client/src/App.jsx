import React from 'react';
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import { Index } from "./pages/user/index";
import { RegistrationForm } from "./pages/user/create";
import { EditUser } from "./pages/user/edit";
import UserDetails from "./pages/user/show";

/*
const router = createBrowserRouter([
    {
	path: "/",
	element: <Home />,
    },
    {
	path: "/users",
	element: <Index />,
    },
    {
	path: "/users/new",
	element: <RegistrationForm />
    },
    {
	path: "/users/show",
	element: <ShowUser />
    }
]);
*/

/*
function App() {
    return (
	<RouterProvider router={router} />
    )
}
*/

const App = () => {
    return (
	<BrowserRouter>
	    <Routes>
		<Route path="/" exact element={ <Home /> } />
		<Route path="/users" element={ <Index /> } />
		<Route path="/users/new" element={ <RegistrationForm /> } />
		<Route exact path="/users/:id" element={ <UserDetails /> } />
		<Route path="/users/:id/edit" element={ <EditUser /> } />
	    </Routes>
	</BrowserRouter>
    );
}

export default App
