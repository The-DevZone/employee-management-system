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
  const [userLoggedInData, setUserLoggedInData] = useState(null)
  const [userData, setUserData] =useContext(AuthContext)

  // const authData = useContext(AuthContext)
  // console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
      setUser(loggedInUser.role)
    }

  }, [userData])


  const handleLogin = (email, password) => {

    const findAdminData =  userData && userData.admin?.find(admin => admin.email === email && admin.password === password);

    // console.log(userAdmin)
    // console.log(useremployees)
    if (findAdminData) {

      setUser({ role: "admin" })
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.employees?.find(emp => emp.email === email && emp.password === password);
      if(employee){
        setUser("employee")
        setUserLoggedInData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" , data:"employee" }))

      }
    } else {
      alert("Invalid cradintial")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" ? <EmployeeDashboard data={userLoggedInData} /> : null }
    </>
  );
}


export default App;
