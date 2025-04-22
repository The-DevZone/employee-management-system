import React from 'react'
import Header from '../other/Header';
import CreateTasks from '../other/CreateTasks';
import AllTasks from '../other/AllTasks';
export const AdminDashboard = () => {
    return (
        <>
            <Header />
            <CreateTasks />
            <AllTasks />

        </>
    )
}

export default AdminDashboard;