import React from 'react'
import Header from './Header'
const CreateTasks = () => {
  return (
    <>
      {/* <Header/> */}
      <div className="bg-gray-900 text-white min-h-2/12 flex  justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Task Title</label>
                <input
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block mb-1">Assign to</label>
                <input
                  type="text"
                  placeholder="employee name"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block mb-1">Category</label>
                <input
                  type="text"
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
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateTasks