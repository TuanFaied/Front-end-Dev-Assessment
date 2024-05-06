import React from 'react'

const custombutton = ({ text }) => {
  return (
    <button
      className=" px-5 py-3 
                 rounded-tl-[4px] 
                 bg-SecondaryColor text-white 
                  transition 
                 flex items-center 
                 justify-center font-[inter] font-bold text-tx5 " 
    >
      {text}
    </button>
  )
}

export default custombutton