import React from 'react';

const TaskListNumbers = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4'>
            <div className='h-36 bg-red-300 rounded-lg p-4 shadow-lg flex justify-between items-center px-6'>
                <h2 className='text-2xl text-white'>0</h2>
                <p className='text-white text-3xl'>Tasks</p>
            </div>

            <div className='h-36 bg-yellow-700 rounded-lg p-4 shadow-lg flex justify-between items-center px-6'>
                <h2 className='text-2xl text-white'>0</h2>
                <p className='text-white text-3xl'>Tasks</p>
            </div>

            <div className='h-36 bg-green-800 rounded-lg p-4 shadow-lg flex justify-between items-center px-6'>
                <h2 className='text-2xl text-white'>0</h2>
                <p className='text-white text-3xl'>Tasks</p>
            </div>

            <div className='h-36 bg-blue-700 rounded-lg p-4 shadow-lg flex justify-between items-center px-6'>
                <h2 className='text-2xl text-white'>0</h2>
                <p className='text-white text-3xl'>Tasks</p>
            </div>
        </div>
    );
};

export default TaskListNumbers;
