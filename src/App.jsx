import React from 'react';
import { useState } from 'react';
import testimg from './images/testimg.png';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const images = [img1, img2, img3, img4, img5, img7, img8, img9, img6];

  return (
    <div className='w-full flex flex-wrap aspect-w-1 aspect-h-1'>
      {images.map((image, index) => (
        <div key={index} className='w-1/2 sm:w-1/2 md:w-1/4 p-2 relative'>
          <div className='relative'>
            <img
              src={image}
              alt={`test image ${index}`}
              className='object-cover w-full h- rounded-lg'
            />
            <div className='text-2xl'>{`Img${index + 1}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
