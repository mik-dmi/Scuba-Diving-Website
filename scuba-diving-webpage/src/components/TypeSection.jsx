import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styles, { layout } from "../style";


const TypeSection = () => {
  return (
    <section className={`${layout.section} ml-[3em] lg:text-4xl text-2xl font-poppins w-[1100px] font-semibold`}>
        <h2 className="text-gray-700">
        Explore the underwater world along with {' '}
        <span className="text-gradient">
            <Typewriter
                words={['Grey Seals', 'Lemon Sharks', 'Manta Rays']}
                loop
                typeSpeed={120}
            />
        </span>
        </h2>


        
    </section>
  );
}

export default TypeSection;

