import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  // console.log(userData)

  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()

    setUserData(employees)
  }, [])




  return (
    <AuthContext.Provider value={[userData , setUserData]}>
      <div>{children}</div>
    </AuthContext.Provider>
  )
}
