import React from 'react';
import { Typewriter } from 'react-simple-typewriter';



const TypeSection = () => {
  return (
    <div className="ml-[2em]  lg:text-4xl text-2xl font-poppins font-semibold">
        <h2 className="text-white">
        Explore the underwater world along with {' '}
        <span className="text-gradient">
            <Typewriter
                words={['Grey Seals', 'Lemon Sharks', 'Manta Rays']}
                loop
                typeSpeed={120}
            />
        </span>
        </h2>


        
    </div>
  );
}

export default TypeSection;

