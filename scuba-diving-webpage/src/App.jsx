import React from 'react'
import styles from './style'
import {Navbar, DivingCourses, FirstTimeDive, PlanDive, Footer, Hero, TypeSection, OurTeam, ContactUs, Reveal} from './components'


   const App = () => (
    <div className="bg-white w-full overflow-hidden">
    <div className={`md:px-16 px-0 ${styles.flexCenter} min-h-min flex flex-col  relative`}>
      <div className={`${styles.boxWidth} min-h-min relative bg-primary`}>
          <div
            className={`absolute inset-0 bg-turtle bg-cover bg-center`}
            style={{ opacity: '0.5' }} // Adjust the opacity value as needed
          />
          <div className={`${styles.paddingHero} relative z-10 h-[100%] flex flex-col`}>
            <Navbar />
            <Reveal>
                <Hero />
            </Reveal>
          </div>         
      </div>
        <div className={` ${styles.boxWidth} flex flex-col justify-center  pl-[2em] pr-[2em]  `}>
          <TypeSection /> 
        </div> 
    </div>
   
      <div className={`bg-white  sm:px-16 px-0 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex flex-col items-center `}>
          <Reveal>
            <div className={`${styles.paddingHero}  bg-gray-100 flex flex-col   pl-[2em] pr-[2em] `}>
              <PlanDive />
            </div>
          </Reveal>
          
          <Reveal> 
            <div className={`${styles.paddingHero} flex flex-col   pl-[2em] pr-[2em] `}>
              <DivingCourses />
            </div> 
          </Reveal>
          
          <Reveal>  
            <div className={`${styles.paddingHero}    bg-gray-100 flex flex-col   pl-[2em] pr-[2em] `}>  
              <FirstTimeDive />
            </div> 
          </Reveal>
          
         
            <div className={`${styles.paddingHero}  flex flex-col   pl-[2em] pr-[2em]  items-center `}>  
            <Reveal>
              <OurTeam />
            </Reveal>
            </div> 
            
          
          <Reveal>
            <div className={`${styles.paddingHero}  bg-gray-100  flex flex-col    p-[2em] `}>      
                <ContactUs />
            </div> 
          </Reveal>
          <div className={`${styles.paddingHero}  bg-primary flex flex-col w-[100%]    p-[2em] `}>  
          <Reveal>
            <Footer />
          </Reveal>
          </div> 
 
        </div>
      </div>
      
    </div>
  );
  


export default App;
