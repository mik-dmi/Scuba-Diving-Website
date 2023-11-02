import React from 'react'


const Button = ({ styles, textInButton }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium 
  text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {textInButton}
  </button>
);

export default Button