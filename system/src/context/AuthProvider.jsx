import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  return (
    <AuthContext.Provider value={"Rohit verma hi this"}>
      <div>{children}</div>
    </AuthContext.Provider>
  )
}
