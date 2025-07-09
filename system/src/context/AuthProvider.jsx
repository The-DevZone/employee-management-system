import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)
  console.log(userData)

  useEffect(() => {
    const { admin, employees } = getLocalStorage()

    setuserData({admin , employees})
  }, [])




  return (
    <AuthContext.Provider value={userData}>
      <div>{children}</div>
    </AuthContext.Provider>
  )
}
