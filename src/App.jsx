import React from 'react';
import { useState } from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';
import img10 from './images/10.jpeg';
import img11 from './images/11.jpeg';
import img12 from './images/12.jpeg';
import img13 from './images/13.jpeg';
import img14 from './images/14.jpeg';
import img15 from './images/15.jpeg';
import img16 from './images/16.jpeg';
import img17 from './images/17.jpeg';
import img18 from './images/18.jpeg';

import './App.css';
import PriceCalculator from './components/PriceCalculator';

const imageData = [
  { image: img17, name: 'Hand Printed Prndant with pink and blue Agate Necklace' },
  { image: img2, name: 'Pearl Chain Necklace' },
  { image: img3, name: 'Green Terra Jasper with Fancy Pendant' },
  { image: img4, name: 'Red Onyx  Necklace with Earrings' },
  { image: img1, name: 'Necklace' },

  { image: img6, name: 'Green and Red Onyx beads Silver Earring' },
  { image: img7, name: 'Oxydised Silver Earring' },
  { image: img8, name: 'Tribal Tibetan oxydised Silver Necklace with Earring' },
  { image: img9, name: 'Faux Pearl Earring' },
  { image: img10, name: 'Green Aventurine Chip Earring' },
  { image: img11, name: 'Red Jasper Earring' },
  { image: img12, name: 'Blur Aventurine Chip Earring' },
  { image: img13, name: 'Fresh Water Pearl Earring' },
  { image: img18, name: 'Garnate Earring' },

  { image: img15, name: 'Multicolor Color Pendant with Chain' },
  { image: img16, name: 'Black Agate Necklace' },
  { image: img5, name: 'Pink Onyx beads Silver Earring' },
  { image: img14, name: 'Green Agate Beads Necklace' },


];

  function App() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
    return (
      <div>
      <div className='w-full flex flex-wrap aspect-w-1 aspect-h-1'>
        {imageData.map((data, index) => (
          <div key={index} className='w-1/2 sm:w-1/2 md:w-1/4 p-2 relative'>
            <div className='relative'>
              <img
                src={data.image}
                alt={`test image ${index}`}
                className='object-cover w-full h- rounded-lg'
                onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
              />
 <div className={`text-lg ${hoveredIndex === index ? 'text-green-500' : ''}`}>
              {data.name}
            </div>            </div>
          </div>
        ))}


      </div>
      <PriceCalculator />          

      </div>
    );
  }

  export default App;