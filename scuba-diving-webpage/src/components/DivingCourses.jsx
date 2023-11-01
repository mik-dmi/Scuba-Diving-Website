import { apple, bill, google, coursesIcon } from "../assets";
import styles, { layout } from "../style";

const DivingCourses = () => (
  <section id="DivingCourses" className={`${layout.sectionReverse}  bg-white`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="Diving Courses" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start 
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Diving Courses
      </h2>
          <ul className="ml-[1rem] text-[1.4rem] mt-[1rem]" >
            <li className="font-semibold font-poppins flex h-[2rem]">
              <img src={coursesIcon} alt="Courses" />
              <span className="ml-[1rem]">Open Water Diver</span>
            </li>
            <li className="font-semibold font-poppins flex h-[2rem]">
              <img src={coursesIcon} alt="Courses" />
              <span className="ml-[1rem]">Advanced Open Water Diver</span>
            </li>
            <li className="font-semibold font-poppins flex h-[2rem]">
              <img src={coursesIcon} alt="Courses" />
              <span className="ml-[1rem]">Rescue Diver</span>
            </li>
            <li className="font-semibold font-poppins flex h-[2rem]">
              <img src={coursesIcon} alt="Courses" />
              <span className="ml-[1rem]">Nitrox Diver</span>
            </li>
            <li className="font-semibold font-poppins flex h-[2rem]">
              <img src={coursesIcon} alt="Courses" />
              <span className="ml-[1rem]">Deep Diver</span>
            </li>
          </ul>
    

    </div>
  </section>
);

export default DivingCourses;