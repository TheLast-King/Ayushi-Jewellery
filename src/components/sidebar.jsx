import React, { useState } from 'react';
import Hamburger from 'hamburger-react'

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

  

  return (
    <div className="flex h-screen bg-gray-100">
      

    { isOpen === false ? (
        <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    ): (  <div className="bg-green-800 text-green-800 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/5 xl:w-1/6">
        <div className="py-4 px-2 sm:px-4 md:px-6 lg:px-4 xl:px-6">
        <div className='flex flex-row'>       

          <h2 className="flex-row text-lg font-semibold uppercase m-2">Menu </h2>
          <div className='flex-row m-2'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          </div>
          <nav>

      
            <ul>
              <li className="mb-2">
                <a href="#teachers" className="block py-2 px-4 rounded ">
                  Teachers
                </a>
              </li>
              <li className="mb-2">
                <a href="#students" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Students
                </a>
              </li>
              <li className="mb-2">
                <a href="#admin" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Admin
                </a>
              </li>
            </ul>
            
          </nav>
        </div>
      </div>)}


    

    
    </div>
  );
};

export default Sidebar;
