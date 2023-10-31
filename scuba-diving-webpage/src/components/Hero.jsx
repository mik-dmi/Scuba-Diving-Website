import React from 'react';
import styles from  '../style';

import GetStarded from './GetStarted'


const Hero = () => (
    <section id = "home" className = {`flex md:flex-row
     flex-col  ss:align-middle ${styles.paddingY} h-max`}>     
      <div className='flex flex-row justify-center 
      items-center w-full'>
 
        <div className="flex flex-col justify-between items-start sm:w-full  ">
          <h1 className="flex-1 font-poppins font-semibold 
          sm:text-[72px] text-[52px] text-white md:leading-[0.9em] leading-[1.1em] ">
            Best Scuba <br/>{" "}
            <span className="text-gradient flex-wrap md:whitespace-pre-line   sm:whitespace-nowrap "> Diving Center</span>{" "}
            <br className="block " />{" "}
            <span className="md:flex hidden mt-2"> In the World</span>{" "}
           

          </h1>
          <div className="flex  mr-0  mt-5 sm:pb-[15rem] pb-[20rem] ">
            <GetStarded />
          </div>
        </div>
      </div>
      { /*    <div className={`flex-col ${styles.flexCenter} md:my-0 my-10  `}>
        <img src={diver} className="w-[50%] h[50%]  object-cover  z-[5]"></img>
        
        <img src={turtle} className="w-[50%] h[50%]  object-cover   z-[5]"></img>
        <img src={jelly} className="w-[50%] h[50%]  object-cover  self-end z-[5]"></img>

  
        <div className = "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "/>     
        <div className = "absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className = "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
  
      </div> */}

    </section>
  )


export default Hero