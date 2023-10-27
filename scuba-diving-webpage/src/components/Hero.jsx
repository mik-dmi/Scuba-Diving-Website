import React from 'react';
import styles from  '../style';
import {discount, robot} from '../assets';
import GetStarded from './GetStarted'

const Hero = () => (
    <section id = "home" className = {`flex md:flex-row
     flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6`}>
      </div>
      <div className='flex flex-row justify-between 
      items-center w-full'>
 
        <div className="flex flex-col justify-between items-start w-full">
          <h1 className="flex-1 font-poppins font-semibold 
          ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Best Diving <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Experience</span>{" "}
            In  <br className="sm:block hidden" />{" "}
            the World

          </h1>
          <div className="ss:flex hidden ml-60 mr-0 ">
            <GetStarded />

          </div>
        </div>
      </div>
    </section>
  )


export default Hero