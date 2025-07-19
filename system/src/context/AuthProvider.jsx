// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState([])
//   // console.log(userData)

//   useEffect(() => {
//     // setLocalStorage()
//     const { employees } = getLocalStorage()
//     // console.log("Storage data:", employees);

//     setUserData(employees)
//   }, [])

//   // // Load from localStorage on first render
//   // useEffect(() => {
//   //   console.log("ma chal raha hu kya")
//   //   const storedUsers = localStorage.getItem('employees');
//   //   if (storedUsers) {
//   //     setUserData(JSON.parse(storedUsers));
//   //   }
//   // }, []);




//   return (
//     <AuthContext.Provider value={[userData, setUserData]}>
//       <div>{children}</div>
//     </AuthContext.Provider>
//   )

// }


// import React, { createContext, useEffect, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage.jsx';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const { employees } = getLocalStorage();
//     if (employees && employees.length > 0) {
//       setUserData(employees);
//     }
//   }, []);

//   // useEffect(() => {
//   //   if (userData && userData.length > 0) {
//   //     localStorage.setItem("employees", JSON.stringify(userData));
//   //   }
//   // }, [userData]);
//   useEffect(() => {
//     if (userData.length > 0) {
//       setLocalStorage(userData);
//     }
//   }, [userData]);
//   return (
//     <AuthContext.Provider value={[userData, setUserData]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// context/AuthProvider.jsx

// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage,  setLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState([])

//   useEffect(() => {
//     setLocalStorage() // ✅ Initialize with default data if not set
//     const { employees } = getLocalStorage();
//      console.log("Employees from localStorage:", employees);
//     setUserData(employees);
//   }, []);

//   return (
//     <AuthContext.Provider value={[userData, setUserData]}>
//       {children}
//     </AuthContext.Provider>
//   )
// }


import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  console.log(userData)

  useEffect(() => {
    const employees = localStorage.getItem("employees");
    if (employees) {
      try {
        const parsedEmployees = JSON.parse(employees);
        setUserData(parsedEmployees);
      } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        setUserData([]);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};
