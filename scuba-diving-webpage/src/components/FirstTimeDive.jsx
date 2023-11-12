import React from 'react'
import styles, { layout } from "../style";
import {FirstTime} from "../assets";
import Button from "./Button";

const FirstTimeDive = () =>  (
   
    <section id="FirstTimeDiving" className={` ${layout.section} items-center`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          First time diving   
        </h2> 
        <p className={`${styles.paragraph} max-w-[470px] `}>
        We provide a first time dive experience for those with no experience. Certified instructors will guide you as 
        you dive into crystal-clear waters, encounter marine life, 
        and create unforgettable memories. All equipment provided for the dive. 
        </p>
        <Button  styles={`mt-[2.5em]`} textInButton={"Book now"} />
      </div>
      <div className={layout.sectionImg}>
        <img src={FirstTime} alt="Diving Courses" className="max-w-[90%] max-h-[90%]  shadow-lg " />
      </div>



    </section>
  )


export default FirstTimeDive