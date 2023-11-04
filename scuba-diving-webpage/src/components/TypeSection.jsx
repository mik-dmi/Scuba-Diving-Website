import React from 'react';
import { Typewriter } from 'react-simple-typewriter';



const TypeSection = () => {
  return (
<section className={`flex  flex-col md:text-4xl xs:text-xl xl:text-4xl font-poppins sm:py-[2rem] py-[1rem] justify-center font-semibold text-center min-h-[2em]`}>
  <h2 className="text-gray-700 flex-wrap ml-[1em] mr-[1em] ">
    Explore the underwater world along with {' '}
  </h2>
 
  <div className="text-darkergradient min-h-[1.5em]" >
    <Typewriter
      words={['Grey Seals', 'Lemon Sharks', 'Manta Rays']}
      loop
      typeSpeed={120}
    />
  </div>
</section>
  );
}

export default TypeSection;

