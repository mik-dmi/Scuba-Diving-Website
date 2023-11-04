import React from 'react'
import styles, { layout } from "../style";
import { instructor } from "../constants";

const Instructor = ({ image,id, icon, name , description})=>(
    <div className='flex flex-col items-center justify-center p-[0.5rem] bg-gray-100 w-[15rem]  h-[24rem] rounded-[1rem] '>
        <img src={image} className=' justify-self-center object-cover ' alt="Divemaster" />
        <div className='flex items-start  justify-start pl-0 mt-[1rem] '>
            <img src={icon} className='max-h-[2rem] '  alt="star" />
            <div className=" flex flex-col ml-[1rem] mr-[1rem] " >
                <span className=' text-gray-700 font-poppins text-start  xs:text-[1.2rem]  text-[0.8rem]  font-semibold  mb-[0.2rem]'>{name}</span>
                <span className=' font-poppins xs:text-[1rem] text-[0.8rem] text-gray-700  '>{description}</span>
            </div>

        </div>



    </div>



)


const OurTeam = () => (
    <section id = "team" className={`${layout.section}  align-middle justify-center`}>
        <div className="flex flex-col  justify-center items-center" >
            <h2 className={`${styles.heading2} text-center pb-[4rem]`}>Meet Our Team</h2>
            <div className="grid sm:grid-rows-2  grid-rows-4 sm:grid-cols-2 grid-cols-1  md:gap-x-[10rem] gap-x-[5rem] gap-y-[2rem] ">
                {instructor.map((card, index)=>(
                    <Instructor key={card.id} {...card} index={index} />
                ))}
                

            </div>


        </div>
        

    </section>
  )


export default OurTeam