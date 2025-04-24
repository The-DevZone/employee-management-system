// import './App.css'
// import Login from './components/Auth/Login.jsx'
// import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
// import { setLocalStorage } from './utils/LocalStorage.jsx'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     console.log("hellow monika");

//     setLocalStorage()
//   }, [])

//   return (
//     <>
//       <Login />
//       {/* <EmployeeDashboard /> */}
//       {/* <AdminDashboard /> */}
//     </>
//   )
// }

// export default App


// src/App.jsx

import './App.css';
import Login from './components/Auth/Login.jsx';
import { setLocalStorage } from './utils/LocalStorage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(setLocalStorage());
    setLocalStorage()
    // this will run once on app load
  }, []);

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}


export default App;
