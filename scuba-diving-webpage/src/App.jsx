import React from 'react'
import styles from './style'
import { logo , turtle} from './assets';
import {Navbar, DivingCourses, FirstTimeDive, PlanDive, Clients, CTA,
    Footer, Testimonials, Hero, TypeSection, OurTeam, ContactUs} from './components'


   const App = () => (
    <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX}  ${styles.flexCenter} min-h-min flex flex-col  relative`}>
      <div className={`${styles.boxWidth} min-h-min relative bg-primary`}>
          <div
            className={`absolute inset-0 bg-turtle bg-cover bg-center`}
            style={{ opacity: '0.5' }} // Adjust the opacity value as needed
          />
          <div className={`${styles.paddingHero} relative z-10 h-[100%] flex flex-col`}>
            <Navbar />
            <Hero />

  
          </div> 
 
          
         
      </div>
        <div className={` ${styles.boxWidth} flex flex-col justify-center  pl-[2em] pr-[2em]  `}>
          <TypeSection /> 
        </div> 
    </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <div className={`${styles.paddingHero}  bg-gray-100 flex flex-col   pl-[2em] pr-[2em] `}>
            <PlanDive />
          </div> 
          <div className={`${styles.paddingHero} flex flex-col   pl-[2em] pr-[2em] `}>
            <DivingCourses />
          </div> 
          <div className={`${styles.paddingHero}  bg-gray-100 flex flex-col   pl-[2em] pr-[2em] `}>  
            <FirstTimeDive />
          </div> 
          <div className={`${styles.paddingHero}  flex flex-col   pl-[2em] pr-[2em] `}>  
            <OurTeam />
          </div> 
          <div className={`${styles.paddingHero}  bg-gray-100  flex flex-col    p-[2em] `}>  
            <ContactUs />
          </div> 



          <Footer />
            <Testimonials />
        
            <CTA />
           
          
        </div>
      </div>
    </div>
  );
  


export default App;
