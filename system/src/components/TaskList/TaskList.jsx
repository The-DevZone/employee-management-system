import React from 'react'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FaildTask from './FaildTask'

const TaskList = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div id='tasklist' className='flex overflow-x-auto  flex-nowrap flex-cols-1 sm:flex-cols-2  items-center gap-6 mt-10 px-4 h-[450px]'>
                {
                    data.tasks.map((elem, idx) => {

                        console.log(elem)
                        if (elem.active) {
                            return <AcceptTask key={idx} data={elem} />
                        }

                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} />
                        }
                        if (elem.completed) {
                            return <CompleteTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return < FaildTask key={idx} data={elem} />
                        }

                    })
                }
            </div>
        </>
    )
}

export default TaskList