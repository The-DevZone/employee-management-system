// // import React, { useState } from 'react'
// import { useState } from 'react'
// import Header from './Header'
// const CreateTasks = () => {

//   const [formData, setFormData] = useState({
//     taskTitle: "",
//     taskDate: "",
//     assignTo: "",
//     category: "",
//     tasktaskDescription: ""


//   })

//   console.log(formData)

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => {
//       console.log("Previous Form Data:", prevData); // ✅ Safe logging
//       return {
//         ...prevData,
//         [name]: value,
//       };
//     });

//   };


//   const [newTask, setnewTask] = useState({})

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let userData = JSON.parse(localStorage.getItem("employees"))
//     console.log(userData)

//     const newTask = {
//       ...formData,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: true
//     };

//     userData.map(item => {
//       // console.log(item)
//       if (formData.assignTo == item.firstName) {
//         console.log("chal raha hu ")
//         userData?.push(newTask)
//         userData?.taskCounts + 1 || 0
//         // setnewTask("")

//       }

//     })
//     setnewTask({
//         taskTitle: "",
//         taskDate: "",
//         assignTo: "",
//         category: "",
//         taskDescription: ""
//       })

//     // console.log(newTasks)



//     // setnewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//   }




//   return (
//     <>
//       <div className="bg-gray-900 text-white min-h-2/12 flex  justify-center p-4">
//         {/* <Header/> */}
//         <form onSubmit={handleSubmit} >
//           <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl shadow-lg">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Left Side Inputs */}
//               <div className="space-y-4">
//                 <div>
//                   <label className="block mb-1">Task Title</label>
//                   <input
//                     type="text"
//                     name='taskTitle'
//                     value={formData.taskTitle}
//                     onChange={handleChangeInput}
//                     placeholder="Make a UI design"
//                     className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Date</label>
//                   <input
//                     type="date"
//                     name='taskDate'
//                     value={formData.taskDate}
//                     onChange={handleChangeInput}
//                     className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Assign to</label>
//                   <input
//                     type="text"
//                     name='assignTo'
//                     value={formData.assignTo}
//                     onChange={handleChangeInput}
//                     placeholder="employee name"
//                     className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Category</label>
//                   <input
//                     type="text"
//                     name='category'
//                     value={formData.category}
//                     onChange={handleChangeInput}
//                     placeholder="design, dev, etc"
//                     className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//               </div>

//               {/* Right Side: tasktasktaskDescription and Button */}
//               <div className="flex flex-col justify-between">
//                 <div className="mb-6">
//                   <label className="block mb-1">tasktaskDescription</label>
//                   <textarea
//                     rows="10"
//                     name='tasktaskDescription'
//                     value={formData.tasktaskDescription}
//                     onChange={handleChangeInput}
//                     className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
//                   ></textarea>
//                 </div>
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
//                   Create Task
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default CreateTasks

import { createContext, useState } from 'react'
import Header from './Header'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const CreateTasks = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    taskDescription: ""
  });

  const [userData, setUserData] = useContext(AuthContext)

  console.log(userData)

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // 🔍 Find employee by name
    const assignedEmployee = employees.find(emp =>
      emp?.firstName?.toLowerCase() === formData.assignTo.toLowerCase()
    );
    console.log(assignedEmployee)

    if (!assignedEmployee) {
      alert("❌ Employee not found!");
      return;
    }

    const newTask = {
      taskTitle: formData.taskTitle,
      taskDescription: formData.taskDescription,
      taskDate: formData.taskDate,
      category: formData.category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    // ✅ Push task and update count
    assignedEmployee.tasks.push(newTask);
    assignedEmployee.taskCounts.newTask = (assignedEmployee.taskCounts.newTask || 0) + 1;

    // 💾 Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("✅ Task created and assigned!");

    // 🔄 Reset form
    setFormData({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      category: "",
      taskDescription: ""
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-2/12 flex justify-center p-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Task Title</label>
                <input
                  type="text"
                  name="taskTitle"
                  value={formData.taskTitle}
                  onChange={handleChangeInput}
                  placeholder="Make a UI design"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                />
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  name="taskDate"
                  value={formData.taskDate}
                  onChange={handleChangeInput}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                />
              </div>
              <div>
                <label className="block mb-1">Assign to</label>
                <input
                  type="text"
                  name="assignTo"
                  value={formData.assignTo}
                  onChange={handleChangeInput}
                  placeholder="employee name"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                />
              </div>
              <div>
                <label className="block mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChangeInput}
                  placeholder="design, dev, etc"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="mb-6">
                <label className="block mb-1">Description</label>
                <textarea
                  rows="10"
                  name="taskDescription"
                  value={formData.taskDescription}
                  onChange={handleChangeInput}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
