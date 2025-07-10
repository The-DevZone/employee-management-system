import React from 'react'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FaildTask from './FaildTask'

const TaskList = ({data}) => {
    return (
        <>
            <div id='tasklist' className='flex overflow-x-auto  flex-nowrap flex-cols-1 sm:flex-cols-2  items-center gap-6 mt-10 px-4 h-[450px]'>
                <CompleteTask  data={data} />
                <AcceptTask />
                <NewTask />
                <FaildTask />
            </div>
        </>
    )
}

export default TaskList