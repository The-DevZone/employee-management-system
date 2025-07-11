import React, { useEffect } from 'react';
import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'

import './App.css';
import Login from './components/Auth/Login.jsx';
import { useContext, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
// import { useEffect } from 'react';
import { AuthContext } from './context/AuthProvider.jsx';



function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const userData = useContext(AuthContext)

  // const authData = useContext(AuthContext)
  // console.log(authData)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser")

  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser)
  //     setUser(loggedInUser.role)
  //     setLoggedInUser(userData.data)

  //   }

  // }, [userData])
  // localStorage.clear()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(typeof loggedInUser)
    // console.log(loggedInUser)
    // if (loggedInUser) {
    //   const parsedData = JSON.parse(loggedInUser);
    //   // console.log(parsedData)
    //   if (parsedData.role === "admin") {
    //     setUser("admin")
    //   } else if (parsedData.role === "employee") {
    //     setUser("employee")
    //     setLoggedInUser(parsedData.data)
    //   }
    // }
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])

  

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    console.log("ma button pr click hua hu logout wale pr ")

    setUser(null)
    setLoggedInUser(null)
  }
  // console.log(handleLogout)


  const handleLogin = (email, password) => {

    const findAdminData = userData && userData.admin?.find(admin => admin.email === email && admin.password === password);

    if (findAdminData) {
      setUser({ role: "admin" })
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.employees?.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    } else {
      alert("Invalid cradintial")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" ? <EmployeeDashboard data={loggedInUser} handleLogout={handleLogout} /> : null}
    </>
  );
}


export default App;
