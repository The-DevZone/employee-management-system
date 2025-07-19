

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from 'framer-motion';
import dummyImg from '../../assets/user.png'; // use your actual image path

const CreateTasks = () => {
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDate: '',
    assignTo: '',
    category: '',
    description: ''
  });

  const [userData, setUserData] = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formData,
      newTask: true,
      active: false,
      completed: false,
      failed: false,
    };

    const updatedUsers = userData.map((user) => {
      if (user.firstName === formData.assignTo) {
        return {
          ...user,
          tasks: [...(user.tasks || []), newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: (user.taskCounts?.newTask || 0) + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers));
    alert('Task added successfully!');
  };


  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: 'spring',
      }
    }),
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row shadow-lg rounded overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Left Section */}
      <div className="md:w-1/2 bg-yellow-400 flex flex-col justify-center items-center p-8 text-center">
        <img src={dummyImg} alt="user" className="w-24 h-24 mb-4 rounded-full shadow-md" />
        <h2 className="text-2xl font-bold mb-2">Lets create a task</h2>
        <p className="text-sm"></p>
      </div>

      {/* Right Section - Animated Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 bg-white p-8 space-y-4">
        {[
          { name: 'taskTitle', type: 'text', placeholder: 'Task Title' },
          { name: 'taskDate', type: 'date', placeholder: '' },
          { name: 'assignTo', type: 'text', placeholder: 'Assign To (Employee First Name)' },
          { name: 'category', type: 'text', placeholder: 'Category' },
        ].map((field, index) => (
          <motion.input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="p-2 w-full border rounded text-black"
            variants={inputVariant}
            initial="hidden"
            animate="visible"
            custom={index}
          />
        ))}

        <motion.textarea
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
          className="p-2 w-full border rounded text-black"
          variants={inputVariant}
          initial="hidden"
          animate="visible"
          custom={5}
        />

        <div className="flex justify-between">
          <motion.button
            type="button"
            className="px-4 py-2 border rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={inputVariant}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={inputVariant}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            Add Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateTasks;








