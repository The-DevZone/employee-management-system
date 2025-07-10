import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
  // console.log(data)
  // alert(data)
  console.log(data)
  return (
    <div>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard