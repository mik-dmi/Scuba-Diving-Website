import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-4" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-slate-500`}>
      <img src={icon} alt="diver" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gray-700 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal  text-gray-700 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const PlanDive = () => (
    <section id="PlanDive" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our dives are planned <br
         className="sm:block hidden"/> to be unforgettable  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[1.5em] `}>
          Explore breathtaking underwater worlds with us. Whether you're a novice
           or an experienced diver, we offer a range of dive experiences for everyone.
        </p>
        <Button styles={`mt-[2.5em]`} textInButton={"Learn more"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </section>
  )


export default PlanDive