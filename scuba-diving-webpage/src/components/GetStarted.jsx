import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[240px] h-[40px] rounded-full
  bg-darkblue-gradient  p-[2px] cursor-pointer flex-col `  }>

      <div className={`${styles.flexStart} flex-row`}>
      <p className="font-poppins font-medium text-[1.2rem] font-semibold leading-[23px] mr-2">
        <span className="text-white">Learn more </span>
      </p>
      <img src={arrowUp} className="w-[23px] h-[23px] object-contain  ml-1" alt="arrow" />
      </div>
 

    </div>
      

)


export default GetStarted