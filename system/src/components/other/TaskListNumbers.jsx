import React from 'react';

const TaskListNumbers = ({ data }) => {
    // console.log(data)

    const colors = ["bg-red-300", "bg-yellow-700", "bg-green-800", "bg-blue-700"]

    const taskCounts = data.taskCounts
    console.log(taskCounts)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4'>
            {/* <div className='h-36  rounded-lg p-4 shadow-lg flex justify-between items-center px-6'>
                <h2 className='text-2xl text-white'>{data.taskCounts.active || 0}</h2>
                <p className='text-white text-3xl'>Tasks</p>
            </div> */}

            {Object.entries(taskCounts).map(([key, value], index) => (
                <div key={key} className={`h-36 ${colors[index % colors.length]}  rounded-lg p-4 shadow-lg flex justify-between items-center px-6`}>
                    <h2 className='text-2xl text-white'>{value}</h2>
                    <p className='text-white text-3xl'>{key}</p>
                </div>
            ))}

        </div>
    );
};

export default TaskListNumbers;
