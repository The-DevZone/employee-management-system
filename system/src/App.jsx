import React, { useEffect } from 'react';
import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'

import './App.css';
import Login from './components/Auth/Login.jsx';
import { useContext, useState } from 'react';

import { AuthContext } from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/LocalStorage.jsx';




function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userData] = useContext(AuthContext)
  console.log(userData)




  useEffect(() => {

    setLocalStorage();

    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log("Found from localStorage:", loggedInUser); // ✅ Check yeh log
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      // console.log("Parsed userData", userData); // ✅ Check isme kya aaya
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    email = email.trim();
    password = password.trim();


    if (email == "admin@gmail.com" && password == "123") {
      // alert()
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        // console.log("✅ Employee found:", employee);
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      } else {
        console.log("❌ No employee matched");
      }
    } else {
      alert("Invalid cradintial")
    }
  }



  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
    setLoggedInUser(null)
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard handleLogout={handleLogout} />}
      {user === "employee" ? <EmployeeDashboard data={loggedInUser} handleLogout={handleLogout} /> : null}
    </>
  );
}


export default App;
