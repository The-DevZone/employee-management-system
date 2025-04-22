import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex justify-between mx-6 items-center h-18 '>
                <h1 className=' text-white text-3xl'>Hellow Rohit 🙌</h1>
                <button className='  bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded '>LogOut</button>
            </div>
        </>
    )
}

export default Header