import React, { useEffect, useState } from 'react'

const CompleteTask = ({ data }) => {
    const [date, setDate] = useState("")

    useEffect(() => {
        const yestarday = new Date()
         yestarday.setDate(yestarday.getDate() - 0)
        const  formateDate = yestarday.toISOString().split("T")[0]
        setDate(formateDate)
    }, [])

    return (
        <div className="max-w-sm p-4 shrink-0 h-[350px] rounded-lg bg-gradient-to-b from-red-900 to-red-500 text-white shadow-lg">
            <div className="flex justify-between items-start">
                <span className="bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-md">{data?.category ?? "No category specified"}</span>
                <span className="text-sm">{date}</span>
            </div>
            <h2 className="mt-4 text-lg font-bold">{data?.taskTitle ?? " Untitled Task"}</h2>
            <p className="mt-2 text-sm text-white/90">
                {data?.taskDescription ?? "No description provided"}
            </p>
            <div className='flex justify-between mt-20'>
                <button className='border-2 py-1 px-3 rounded-sm bg-green-400  '>Mark as Completed</button>
                <button className='border-2 py-1 px-3 rounded-sm bg-red-400  ' >Mark as Faild</button>
            </div>
        </div>
    )
}

export default CompleteTask