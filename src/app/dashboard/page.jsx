import React from 'react'
import AddNewInterview from './_components/AddNewInterview';

function Dashboard() {
  return (
    <>
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Dahsboard</h2>
      <h2>Create and Start the mock with ai</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>
    </div>
    </>
  )
}

export default Dashboard;