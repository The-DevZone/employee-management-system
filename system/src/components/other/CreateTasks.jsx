// import React, { useState } from 'react'
import { useState } from 'react'
import Header from './Header'
const CreateTasks = () => {

  const [formData, setformData] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    description: ""
  })

  const [setNewTask, setSetNewTask] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = localStorage.getItem("employee")
    console.log(data)
  }

  const handleChangeInput = (e) => {
    // const { name, value } = e.target;

    // setformData((prevData) => {
    //   console.log("Previous Form Data:", prevData); // ✅ Safe logging
    //   return {
    //     ...prevData,
    //     [name]: value,
    //   };
    // });

  };



  return (
    <>
      <div className="bg-gray-900 text-white min-h-2/12 flex  justify-center p-4">
        {/* <Header/> */}
        <form onSubmit={handleSubmit} >
          <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Task Title</label>
                  <input
                    type="text"
                    name='taskTitle'
                    value={formData.taskTitle}
                    onChange={handleChangeInput}
                    placeholder="Make a UI design"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1">Date</label>
                  <input
                    type="date"
                    name='taskDate'
                    value={formData.taskDate}
                    onChange={handleChangeInput}
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1">Assign to</label>
                  <input
                    type="text"
                    name='assignTo'
                    value={formData.assignTo}
                    onChange={handleChangeInput}
                    placeholder="employee name"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1">Category</label>
                  <input
                    type="text"
                    name='category'
                    value={formData.category}
                    onChange={handleChangeInput}
                    placeholder="design, dev, etc"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              {/* Right Side: Description and Button */}
              <div className="flex flex-col justify-between">
                <div className="mb-6">
                  <label className="block mb-1">Description</label>
                  <textarea
                    rows="10"
                    name='description'
                    value={formData.description}
                    onChange={handleChangeInput}
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTasks