

import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const AllTasks = () => {
    const [userData] = useContext(AuthContext); // nested array ka first item lo
    if (!userData) return <p>No employee data found</p>;



    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

            {userData.map((emp, idx) => (
                <div key={idx} className='border-2 border-black mb-2 bg-gray-400 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>{emp?.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-400'>{emp?.taskCounts?.newTask ?? 0}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{emp?.taskCounts?.active ?? 0}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white'>{emp?.taskCounts?.completed ?? 0}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{emp?.taskCounts?.failed ?? 0}</h5>
                </div>
            ))}
        </div>
    );
};

export default AllTasks;

