import React from 'react'
import {stats} from '../constants'
import styles from '../style'

const Stats = () => (
    <section className={`flex justify-center md:flex-row flex-col 
    flex-wrap mt-[2em]`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex  w-[100%] justify-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] 
        leading-[21.58px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal 
        xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] 
        leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats