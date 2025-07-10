import React from 'react'

const NewTask = () => {
    return (
        <div className="max-w-sm p-4 shrink-0 h-[350px] rounded-lg bg-radial-[at_25%_25%] from-zinc-900 to-75% to-white text-white shadow-lg">
            <div className="flex justify-between items-start">
                <span className="bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-md">High</span>
                <span className="text-sm">20 Feb 2024</span>
            </div>
            <h2 className="mt-4 text-lg font-bold">Make a youtube video</h2>
            <p className="mt-2 text-sm text-white/90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero
                quisquam. Ea, vitae et.
            </p>
            <div className=' mt-20'>
                <button className='border-2 py-1 px-3 rounded-sm bg-red-400  ' > Add NewTask</button>
            </div>
        </div>
    )
}

export default NewTask