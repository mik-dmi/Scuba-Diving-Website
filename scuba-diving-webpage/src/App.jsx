import React from 'react'
import styles from './style'
import { logo , turtle} from './assets';
import {Navbar, DivingCourses, CardDeal, Business, Clients, CTA,
   Stats, Footer, Testimonials, Hero, TypeSection} from './components'


   const App = () => (
    <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX}  ${styles.flexCenter}  flex flex-col relative`}>
      <div className={`${styles.boxWidth} max-h-[100vh] min-h-[80vh] relative bg-primary`}>
          <div
            className={`absolute inset-0 bg-turtle bg-cover bg-center`}
            style={{ opacity: '0.5' }} // Adjust the opacity value as needed
          />
          <div className={`${styles.paddingHero} relative z-10 h-[100%] flex flex-col`}>
            <Navbar />
            <Hero />
            <div className="flex justify-center ">
              <Stats />
            </div>
  
          </div> 
 
          
         
      </div>
      <div className={`flex flex-col  pl-[2em] pr-[2em] `}>
            <TypeSection /> 
          </div> 
    </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} bg-gray-100`}>

          <div className={`${styles.paddingHero} flex flex-col   pl-[2em] pr-[2em] `}>
            <Business />
          </div> 
            <DivingCourses />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          
        </div>
      </div>
    </div>
  );
  


export default App;
