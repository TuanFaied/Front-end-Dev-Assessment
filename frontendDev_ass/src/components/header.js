import React, { useState, useEffect  } from 'react'
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from '../asserts/Logo.png'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const screensize = 768;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 


    const handleResize = () => {
     setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className="h-[77px] px-20px sm:px-40px md:px-60px lg:px-80px bg-PrimaryColor shadow flex justify-between items-center sm:justify-between"
        
            >
          <div className="flex  items-center w-full sm:w-auto">
            <span className=" font-bold cursor-pointer flex items-center">
              <img
                className="inline w-60 h-9 xs:px-20px "
                src={logo}
                alt="logo"
                
              />
             
            </span>
    
            <span className=" cursor-pointer sm:hidden" onClick={toggleMenu}>
              <IonIcon className='pl-16 h-6 w-8' icon={isMenuOpen ? closeOutline : menuOutline} />
            </span>
          </div>
    
          <ul
            className={`sm:flex sm:items-center z-auto absolute sm:static left-0 top-0 transition-transform duration-500 
                ${isMenuOpen ? 'w-full h-full top-[77px] opacity-100' : 'top-[-400px] opacity-100 '}
                ${windowWidth < screensize ? 'bg-white px-7' : 'bg-PrimaryColor  justify-end'} `}
          >
            <div className="flex flex-col sm:flex-row sm:space-x-7 justify-center items-center h-full space-y-8 sm:space-y-0">
            {[ 'SERVICE', 'ABOUT US', 'CONTACT US', "CAREERS"].map((item) => (
              <li
                key={item}
                className=" sm:text-white text-tx text-black hover:text-SecondaryColor duration-500"
              >
                <a href="#" >{item}</a>
              </li>
            ))}
            
            </div>
          </ul>
        </nav>
      );
    
}

export default Header

