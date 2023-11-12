import styles from "../style";
import { footerLinks, ContactInfo, Sponsor } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col`}>
    <div className={`flex items-start mt-[1rem] justify-center sm:flex-row flex-col mb-[0.5rem]    flex-wrap`}>
      
      <div  className="mr-[4rem] pb-[2rem]   flex flex-col ss:my-0 my-[1rem] min-w-[150px]">
        <h4 className="font-poppins font-medium lg:text-[2rem] text-[1.5rem]  leading-[27px] mb-[1.5rem] text-white">
        {ContactInfo.title}
        </h4>
        <div >
          <div >
            <span className="text-almostWhite lg:text-[1.3rem] text-[1rem] mb-[1rem] ">Address</span>
            <div className="text-dimWhite flex flex-col ml-[1rem] leading-[1.5rem]">
              <span>{ContactInfo.nameCenter}</span>
              
              <span className=" hover:text-secondary cursor-pointer">{ContactInfo.street} <br /> {ContactInfo.city}<br />{ContactInfo.postalCode} </span>

            </div>
          </div>
          <div className=" mt-[0.5rem]">
            <span className="text-almostWhite mlgd:text-[1.3rem] text-[1rem] mb-[1rem] ">Phone</span>
            <div className="text-dimWhite flex flex-col ml-[1rem] leading-[1.5rem]">
              <span className=" hover:text-secondary cursor-pointer">+555 123-4567</span>
            </div>
          </div>
          <div className=" mt-[0.5rem]">
            <span className="text-almostWhite text-[1.3rem] mb-[1rem] ">Email</span>
            <div className="text-dimWhite flex flex-col ml-[1rem] leading-[1.5rem]">
              <span className=" hover:text-secondary cursor-pointer mb-[1rem]">dive_right@scubadive.com</span>
            </div>
          </div>
        </div>
      </div>

      <div  className="flex flex-col pb-[2rem] mr-[4rem]   ss:my-0 my-[1rem] min-w-[150px]">
        <h4 className="font-poppins font-medium lg:text-[2rem] text-[1.5rem] leading-[27px] mb-[1.5rem] text-white">
          {footerLinks.title}
        </h4>
        <ul className="list-none ">
          {footerLinks.links.map((link, index) => (
            <li
              key={link.name}
              className={`font-poppins font-normal text-[1.3rem] leading-[24px] text-almostWhite hover:text-secondary cursor-pointer ${
                index !== footerLinks.links.length - 1 ? "mb-[0.8rem]" : "mb-0"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <div  className="flex flex-col pb-[2rem]  ss:my-0 my-[1rem] min-w-[150px]">
        <h4 className="font-poppins font-medium lg:text-[2rem] text-[1.5rem] leading-[27px] mb-[1.5rem] text-white">
          {Sponsor.title}
        </h4>
        <div >
          
          <div>
            <img src={Sponsor.partnerOne} alt="partner" />
          </div>
        
        </div>
        
        
      </div>

      
    
    
    </div>

    <div className="w-full flex justify-center  items-center lg:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 DiveRight. All Rights Reserved.
      </p>

    </div>
  </section>
);

export default Footer;