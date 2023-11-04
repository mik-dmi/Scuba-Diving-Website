import React from 'react'
import styles, { layout } from "../style";
import Button from "./Button";
import { socialMedia } from "../constants";

const ContactUs = () => (
    <section id ="contact"className={`${layout.section}  align-middle justify-center  md:flex-row flex-col items-center   `}>
     
            <div className="md:w-[60%] w-[100%] ml-[1rem]">
                <h2 className={`${styles.heading2}  `}>Contact Us</h2>
                <p className={`${styles.paragraph}  `}>
                    Ready to dive into adventure? Feel free to get in touch with our friendly team 
                    for any inquiries, booking information, or assistance.
                    .Let's explore the depths together!
                </p>

                <div className='flex mt-[1rem] xs:ml-[1rem] ml-0 mb-[2rem] xs:justify-start justify-center'>

                    {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[2rem] h-[2rem] object-contain cursor-pointer ${
                            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                        ))}
    
                </div>
            </div>
            <div className=' md:mt-[10rem] mt-[2rem] md:ml-[8rem] ml-[0rem] self-center'>
                <Button  textInButton={"Learn more"} />
            </div>
     
        
        
    </section>
  ) 


export default ContactUs