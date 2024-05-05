import React, { useState, useEffect  } from 'react'
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from '../asserts/Logo.png'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const screensize = 375;
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
        <nav className="h-[77px] xs:px-20px sm:px-40px md:px-60px lg:px-80px bg-PrimaryColor shadow flex justify-between items-center xs:justify-between"
        
            >
          <div className="flex  items-center w-full xs:w-auto">
            <span className="text-2xl font-bold cursor-pointer flex items-center">
              <img
                className="inline w-60 h-9 "
                src={logo}
                alt="logo"
                
              />
             
            </span>
    
            <span className=" cursor-pointer xs:hidden" onClick={toggleMenu}>
              <IonIcon className='pr-5 pl-16 h-6 w-8' icon={isMenuOpen ? closeOutline : menuOutline} />
            </span>
          </div>
    
          <ul
            className={`xs:flex xs:items-center z-auto absolute xs:static   left-0 top-0 transition-transform duration-500 
                ${isMenuOpen ? 'top-[77px] opacity-100' : 'top-[-400px] opacity-100 '}
                ${windowWidth < screensize ? 'bg-white px-7' : 'bg-PrimaryColor  justify-end'} `}
          >
            {[ 'SERVICE', 'ABOUT US', 'CONTACT US', "CAREERS"].map((item) => (
              <li
                key={item}
                className="mx-4 my-6 xs:my-0 xs:text-white text-tx text-black hover:text-SecondaryColor duration-500"
              >
                <a href="#">{item}</a>
              </li>
            ))}
    
            
          </ul>
        </nav>
      );
    
}

export default Header

