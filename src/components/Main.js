import React, { useContext } from 'react'
import profile from '../../src/assets/images/profile.jpg'
import lightLocation from '../../src/assets/images/lightLocation.png'
import darkLocation from '../../src/assets/images/darkLocation.png'
import lightGithub from '../../src/assets/images/lightGithub.png'
import darkGithub from '../../src/assets/images/darkGithub.png'
import lightLinkedin from '../../src/assets/images/lightLinkedin.png'
import darkLinkedin from '../../src/assets/images/darkLinkedin.png'
import lightLeetcode from '../../src/assets/images/lightLeetcode.png'
import darkLeetcode from '../../src/assets/images/darkLeetcode.png'
import { ThemeContext } from '../context/ThemeContext'
export default function Main() {
    const context = useContext(ThemeContext);
    const { theme } = context;
    return (
        // <div id='main' className='flex flex-row w-full justify-between py-[96px] px-[80px] bg-light-default items-center gap-[100px] dark:bg-dark-default transition-colors duration-300'>
        //     <div className='flex flex-col gap-[48px] w-[60%]'>
        //         <div className='flex flex-col gap-[8px]'>
        //             <h1 className='text-[60px] font-bold font-inter text-light-900 dark:text-dark-900 transition-colors duration-300'>Hi, I’m Akash 👋</h1>
        //             <p className='text-[16px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
        //         </div>
        //         <div className='flex flex-col gap-[8px]'>
        //             <div className='flex flex-row gap-[8px] items-center'>
        //                 <img src={ theme==="light"?lightLocation:darkLocation} alt="" className='w-[24px]' />
        //                 <p className='text-[16px] text-light-600 dark:text-dark-600 font-inter transition-colors duration-300'>Gurgaon, Haryana</p>
        //             </div>
        //             <div className='flex flex-row gap-[8px] items-center'>
        //                 <div className='flex w-[24px] h-[24px] justify-center items-center'>
        //                     <div className='w-[8px] h-[8px] rounded-full bg-[#10B981]'>

        //                     </div>
        //                 </div>
        //                 <p className='text-[16px] text-light-600 dark:text-dark-600 font-inter transition-colors duration-300'>Available for new projects</p>
        //             </div>
        //         </div>
        //         <div className='flex flex-row gap-[10px] items-center'>
        //             <img src={theme==="light"?lightLinkedin:darkLinkedin} alt="" className='w-[32px] cursor-pointer' />
        //             <img src={theme==="light"?lightLeetcode:darkLeetcode} alt="" className='w-[24px] cursor-pointer' />
        //             <img src={theme==="light"?lightGithub:darkGithub} alt="" className='w-[24px] cursor-pointer' />
        //         </div>
        //     </div>

        //     <div className='relative w-[330px] h-[370px]'>
        //         <div className='z-[10] absolute top-[40px] left-[40px] w-[280px] h-[320px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
        //         </div>
        //         <img src={profile} alt="" className='relative  z-20 w-[280px] h-[320px] object-cover border-[10px] border-light-default dark:border-dark-default transition-colors duration-300' />
        //     </div>
        // </div>
        <div id='main' className='flex flex-col-reverse md:flex-row w-full py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] lg:px-[90px] bg-light-default items-center gap-[48px] md:gap-[80px] dark:bg-dark-default transition-colors duration-300 lg:justify-center'>
            <div className='flex flex-col gap-[48px] w-full md:w-[60%]'>
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[36px] md:text-[52px] sm:text-[42px] font-semibold md:font-bold font-inter text-light-900 dark:text-dark-900 transition-colors duration-300'>Hi, I’m Akash 👋</h1>
                    <p className='text-[16px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='flex flex-row gap-[8px] items-center'>
                        <img src={theme === "light" ? lightLocation : darkLocation} alt="" className='w-[24px]' />
                        <p className='text-[16px] text-light-600 dark:text-dark-600 font-inter transition-colors duration-300'>Gurgaon, Haryana</p>
                    </div>
                    <div className='flex flex-row gap-[8px] items-center'>
                        <div className='flex w-[24px] h-[24px] justify-center items-center'>
                            <div className='w-[8px] h-[8px] rounded-full bg-[#10B981]'>

                            </div>
                        </div>
                        <p className='text-[16px] text-light-600 dark:text-dark-600 font-inter transition-colors duration-300'>Available for new projects</p>
                    </div>
                </div>
                <div className='flex flex-row gap-[10px] items-center'>
                    <img src={theme === "light" ? lightLinkedin : darkLinkedin} alt="" className='w-[32px] cursor-pointer' />
                    <img src={theme === "light" ? lightLeetcode : darkLeetcode} alt="" className='w-[24px] cursor-pointer' />
                    <img src={theme === "light" ? lightGithub : darkGithub} alt="" className='w-[24px] cursor-pointer' />
                </div>
            </div>
            <div className='relative w-[280px] h-[300px] sm:w-[300px] sm:h-[320px] md:w-[330px] md:h-[370px] px-[20px] md:px-0'>
                <div className='z-[10] absolute top-[30px] md:top-[40px] left-[10px] md:left-[40px] w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[280px] md:h-[320px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
                </div>
                <img src={profile} alt="" className='relative  z-20 w-[240px] h-[280px] sm:w-[260px] sm:h-[300px] md:w-[280px] md:h-[320px] object-cover border-[10px] border-light-default dark:border-dark-default transition-colors duration-300' />
            </div>
        </div>
    )
}
