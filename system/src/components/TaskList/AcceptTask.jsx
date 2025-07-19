import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className="max-w-sm p-4 shrink-0 h-[350px] rounded-lg bg-gradient-to-b from-green-950 to-green-500  text-white shadow-lg">
            <div className="flex justify-between items-start">
                <span className="bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-md">{data?.category ?? "No category specified"}</span>
                <span className="text-sm">{data?.taskDate ?? "Date not available"}</span>
            </div>
            <h2 className="mt-4 text-lg font-bold">{data?.taskTitle ?? " Untitled Task"}</h2>
            <p className="mt-2 text-sm text-white/90">
                {data?.description ?? "No description provided"}
            </p>
            <div className='mt-20'>
                <button className='border-2 py-1 px-3 rounded-sm bg-red-400  ' >Accept Task</button>
            </div>
        </div>
    )
}

export default AcceptTask