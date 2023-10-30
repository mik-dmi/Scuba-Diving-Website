import React from 'react'
import styles from './style'
import { logo , turtle} from './assets';
import {Navbar, Billing, CardDeal, Business, Clients, CTA,
   Stats, Footer, Testimonials, Hero} from './components'


   const App = () => (
    <div className="bg-white w-full overflow-hidden">
    <div className={`$${styles.paddingX} ${styles.flexCenter}  flex flex-col relative`}>
      <div className={`${styles.boxWidth} h-[90vh] relative bg-primary`}>
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
    </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
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
