
import './App.css';
import Home from './page/Home';
import Signup from './page/Signup';
import Navbar from './page/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useEffect, useState } from "react";

// import React from 'react'
var users = [
    {
        username: "huzaifa",
        age: 25,
    },
    {
        username: "ahmad",
        age: 23,
        
    },
    {
        username: "ali",
        age: 21,
        
    },
];
function App() {
  const [subdomain, setSubDomain] = useState(null);
	useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setSubDomain(arr[0]);
	}, []);
	const requestedUser = users.find((user) => user.username === subdomain);
  
  return (
    <div className="App">
      {subdomain ? (
				requestedUser ? (
					<div>
						<h1>Username</h1>
						<h3>{requestedUser.username}</h3>
						<h1>Age</h1>
						<h3>{requestedUser.age}</h3>
						
						
					</div>
				) : (
					<h1>Not Found</h1>
				)
			) : (
				<div>
				 <Router>
      <Navbar />
      
      <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='*' element={<Signup/>}/>
       
      </Routes>
      </div>
    </Router>
				</div>
			)}
     
    </div>
  );
}

export default App;
