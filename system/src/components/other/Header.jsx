import React, { useEffect, useState } from 'react'

const Header = ({ data , handleLogout }) => {

    const [userName, setUserName] = useState("")

    useEffect(() => {
        if (!data) {
            setUserName("admin")
        } else {
            setUserName(data.firstName)
        }
    } , [])


    return (
        <>
            <div className='flex justify-between mx-6 items-center h-18 '>
                <h1 className=' text-white text-3xl'>Hellow 🙌{userName}  </h1>
                <button onClick={handleLogout} className='  bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded '>LogOut</button>
            </div>
        </>
    )
}

export default Header