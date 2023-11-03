import React from 'react'
import styles, { layout } from "../style";
import Button from "./Button";
import { socialMedia } from "../constants";

const ContactUs = () => (
    <section className={`${layout.section}  align-middle justify-center    `}>
        <div className="flex w-[100%">
            <div className="w-[60%] ml-[1rem]">
                <h2 className={`${styles.heading2}  `}>Contact Us</h2>
                <p className={`${styles.paragraph}  `}>
                    Ready to dive into adventure? Feel free to get in touch with our friendly team 
                    for any inquiries, booking information, or assistance.
                    .Let's explore the depths together!
                </p>

                <div className='flex mt-[1rem]'>
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
            <div className='flex '>
                <Button styles={`mt-[2.5em]`} textInButton={"Learn more"} />
            </div>
            </div>
        
        
    </section>
  ) 


export default ContactUs