
import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'

import './App.css';
import Login from './components/Auth/Login.jsx';
import { useState } from 'react';
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
// import { useEffect } from 'react';
import { AuthContext } from './context/AuthProvider.jsx';



function App() {
  // useEffect(() => {
  //   console.log(setLocalStorage());
  //   setLocalStorage()
  //   console.log(getLocalStorage())
  // }, []);


  const [user, setUser] = useState(null)

  const handelLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin")
      console.log("admin login")
    } else if (email === "employee@gmail.com" && password === "123") {
      setUser("employee")
      console.log("user login")
    } else {
      alert("Invalid cradintial")
    }
  }

  const datass = useContext(AuthContext)
  console.log(datass)
  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}


export default App;
