import React from 'react'
import logo from '../asserts/Logo.png'
function Footer() {
  return (
    <footer className="bg-PrimaryColor text-white">
      <div className="container pt-[40px] lg:pr-20 lg:pl-20 md:pr-[60px] md:pl-[60px] sm:pr-[40px] sm:pl-[40px] pr-[20px] pl-[20px]
       flex flex-wrap justify-between  flex-col">

        <div className="flex flex-wrap">

        <div className="flex-col lg:mr-[345px] md:mr-[112px]  ">
        <img
                className="inline w-60 h-9 "
                src={logo}
                alt="logo"
                
              />
          <p className="mt-4 w-[335px] sm:w-[413px] text-tx2 text-white ">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>

        <div className="flex sm:flex-row pt-[60px] md:pt-[0px] flex-col">
          <div className="w-full xs:w-auto  mr-[128px]">
            <h3 className="text-tx3 font-bold mb-2">Our Technologies</h3>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="text-tx text-white hover:text-gray-300">ReactJS</a></li>
              <li><a href="#" className="text-tx text-white hover:text-gray-300">Gatsby</a></li>
              <li><a href="#" className="text-tx text-white hover:text-gray-300">Next25</a></li>
              <li><a href="#" className="text-tx text-white hover:text-gray-300">NodeJS</a></li>
            </ul>
          </div>
          <div className="w-full pt-[40px] sm:pt-[0px] xs:w-auto">
            <h3 className="text-tx3 font-bold mb-2">Our Services</h3>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="text-tx text-white hover:text-gray-300">Social Media Marketing</a></li>
              <li><a href="#" className="text-tx text-white hover:text-gray-300">Web & Mobile App Development</a></li>
              <li><a href="#" className="text-tx text-white hover:text-gray-300">Data & Analytics</a></li>
            </ul>
          </div>
        </div>

        </div>
        <div className="flex mt-[40px] mb-[20px] flex-col items-center ">
        <hr
          className="sm:w-[630px] w-[335px] h-[1px] bg-white "
          
        />
          <ul className="flex space-x-4 pt-2">
            <li><a href="#" className="text-white hover:text-gray-300">Privacy Policy</a></li>
            <p>|</p>
            <li><a href="#" className="text-white hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
