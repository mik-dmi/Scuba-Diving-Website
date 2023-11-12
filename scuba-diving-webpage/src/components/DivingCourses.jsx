import {  coursesIcon, imageOfDivingCourses } from "../assets";
import styles, { layout } from "../style";

const DivingCourses = () => (
  <section id="courses" className={`${layout.sectionReverse} items-center  bg-white`}>
    <div className={layout.sectionImgReverse}>
      <img src={imageOfDivingCourses} alt="Diving Courses" className="md:max-w-[90%] max-w-[75%] md:max-h-[90%] max-h-[75%] shadow-lg " />


    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Diving Courses
      </h2>
      <ul className="ml-[1rem] sm:text-[1.4rem] text-[1rem] font-poppins text-gray-700  mt-[1rem] flex flex-col flex-wrap space-y-2">
        <li className="font-medium font-poppins flex min-h-[2rem] items-center">
          <img src={coursesIcon}  className=" w[2.5em] h-[2.5em]" alt="Courses" />
          <span className="ml-[1rem]">Open Water Diver</span>
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
          <span className="ml-[1rem]">Freediving</span>
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