import { bill, coursesIcon, imageOfDivingCourses } from "../assets";
import styles, { layout } from "../style";

const DivingCourses = () => (
  <section id="DivingCourses" className={`${layout.sectionReverse}  bg-white`}>
    <div className={layout.sectionImgReverse}>
      <img src={imageOfDivingCourses} alt="Diving Courses" className="w-[90%] h-[90%] max-w-[100%] shadow-lg " />

      {/* gradient start 
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Diving Courses
      </h2>
      <ul className="ml-[1rem] sm:text-[1.4rem] text-[1rem]  mt-[1rem] flex flex-col flex-wrap space-y-2">
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon}  className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Open Water Diver</span>
        </li>
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon} className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Advanced Open Water Diver</span>
        </li>
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon} className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Rescue Diver</span>
        </li>
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon} className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Nitrox Diver</span>
        </li>
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon} className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Deep Diver</span>
        </li>
      </ul>
    

    </div>
  </section>
);

export default DivingCourses;