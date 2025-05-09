import React, { useContext, useEffect, useRef, useState } from 'react'
import lightMode from '../../src/assets/images/lightMode.png'
import darkMode from '../../src/assets/images/darkMode.png'
import { ThemeContext } from '../context/ThemeContext';
import { FetchContext } from '../context/FetchContext';
import { gsap } from 'gsap';
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const context = useContext(FetchContext);
  const { contact } = context;
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  const handleOpenLink = () => {
    window.open(contact?.cv ?? '', "_blank");
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleHamClick = () => {
    setShowMenu(!showMenu);
  }
  const handleToggleClick = () => {
    gsap.fromTo(
      imgRef.current,
      { rotation: 0 },
      { rotation: 360, duration: 1.2, ease: 'power2.inOut' }
    );
    toggleTheme()
  }
  const handlePhoneToggleClick = () => {
    gsap.fromTo(
      imgRef2.current,
      { rotation: 0 },
      { rotation: 360, duration: 1.2, ease: 'power2.inOut' }
    );
    toggleTheme()
  }
  return (
    <div id='nav' className={`sticky top-0 z-30 w-full flex flex-row justify-between px-[16px] sm:px-[24px] md:px-[80px]  py-[16px] items-center bg-light-default dark:bg-dark-default transition-colors duration-300`}>
      <a href="#main">
        <img src={require('../assets/images/logoLight.png')} alt="" className='w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[36px] md:h-[36px] shadow-2xl cursor-pointer' />
      </a>
      {showMenu ? <img onClick={handleHamClick} src={theme === 'light' ? require('../assets/images/ligthCross.png') : require('../assets/images/darkCross.png')} alt="" className='w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:hidden' /> : <img onClick={handleHamClick} src={theme === 'light' ? require('../assets/images/hamLight.png') : require('../assets/images/hamDark.png')} alt="" className='w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:hidden' />}
      <div className={`${showMenu ? 'max-h-[600px]' : 'max-h-0'} w-full absolute md:hidden pb-[10px] left-0 top-full transition-all duration-300 overflow-hidden ease-out bg-light-default dark:bg-dark-default`}>
        <ul className='flex flex-col gap-[16px] w-full  transition-colors duration-300 p-[16px] font-inter text-light-600 dark:text-dark-600 text-[16px] sm:text-[18px] font-medium '>
          <li onClick={() => { setShowMenu(false) }} className='cursor-pointer'><a href="#about">About</a></li>
          <li onClick={() => { setShowMenu(false) }} className='cursor-pointer'><a href="#skills">Skills</a></li>
          <li onClick={() => { setShowMenu(false) }} className='cursor-pointer'><a href="#exp">Experience</a></li>
          <li onClick={() => { setShowMenu(false) }} className='cursor-pointer'><a href="#projects">Projects</a></li>
          <li onClick={() => { setShowMenu(false) }} className='cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
        <div className='p-[16px] w-full flex flex-col gap-[16px]'>
          <div className='w-full flex flex-row items-center justify-between'>
            <span className='font-inter text-light-600 dark:text-dark-600 text-[16px] sm:text-[18px] font-medium'>Switch Theme</span>
            <img ref={imgRef2} className='w-[24px] cursor-pointer m-[6px] transition-colors duration-300' src={theme === 'light' ? lightMode : darkMode} onClick={handlePhoneToggleClick} />
          </div>
          <div className='px-[16px] py-[6px] bg-light-900 hover:bg-light-600 dark:hover:bg-dark-600 dark:bg-dark-900 rounded-[12px] text-center cursor-pointer transition-colors duration-300' onClick={handleOpenLink}>
            <span className='text-[16px] font-medium text-light-50 dark:text-dark-50 font-inter transition-colors duration-300 '>Download CV</span>
          </div>
        </div>
      </div>
      <div className='hidden md:flex  flex-row items-center gap-[48px]'>
        <ul className='flex flex-row gap-[24px] font-inter text-light-600 dark:text-dark-600 md:text-[20px]  font-medium transition-colors duration-300'>
          <li className='cursor-pointer'><a href="#about">About</a></li>
          <li className='cursor-pointer'><a href="#skills">Skills</a></li>
          <li className='cursor-pointer'><a href="#exp">Experience</a></li>
          <li className='cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
        <div className='flex  flex-row gap-[16px] items-center'>
          <img ref={imgRef} className='w-[24px] cursor-pointer m-[6px] transition-colors duration-300' src={theme === 'light' ? lightMode : darkMode} onClick={handleToggleClick} />
          <div className='px-[16px] py-[6px] bg-light-900 hover:bg-light-600 dark:hover:bg-dark-600 dark:bg-dark-900 rounded-[12px] cursor-pointer transition-colors duration-300' onClick={handleOpenLink}>
            <span className='text-[16px] font-medium text-light-50 dark:text-dark-50 font-inter transition-colors duration-300'>Download CV</span>
          </div>
        </div>
      </div>

    </div>
  )
}
