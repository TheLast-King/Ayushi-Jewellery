import React from 'react'
import Sidebar from './sidebar.jsx'
import Teachers from './Teachers.jsx'

const Home = () => {
  return (
    <div className='flex flex-row'>
    <Sidebar />
    <div className="flex flex-col p-4">
    
        <h1 className="text-2xl font-semibold">Welcome to the Dashboard!</h1>
            <Teachers/>
      </div>
   
      </div>

  )
}

export default Home