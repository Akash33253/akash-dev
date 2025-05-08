import React, { useContext } from 'react'
import lightLocation from '../../src/assets/images/lightLocation.png'
import darkLocation from '../../src/assets/images/darkLocation.png'
import lightGithub from '../../src/assets/images/lightGithub.png'
import darkGithub from '../../src/assets/images/darkGithub.png'
import lightLinkedin from '../../src/assets/images/lightLinkedin.png'
import darkLinkedin from '../../src/assets/images/darkLinkedin.png'
import lightLeetcode from '../../src/assets/images/lightLeetcode.png'
import darkLeetcode from '../../src/assets/images/darkLeetcode.png'
import { ThemeContext } from '../context/ThemeContext'
import { FetchContext } from '../context/FetchContext'
export default function Main() {
    const context = useContext(ThemeContext);
    const { theme } = context;
        const fetchContext = useContext(FetchContext);
        const { about,contact } = fetchContext;
    return (
        <div id='main' className='flex flex-col-reverse md:flex-row w-full py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] lg:px-[90px] bg-light-default items-center gap-[48px] md:gap-[80px] dark:bg-dark-default transition-colors duration-300 lg:justify-center'>
            <div className='flex flex-col gap-[48px] w-full md:w-[60%]'>
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[36px] md:text-[52px] sm:text-[42px] font-semibold md:font-bold font-inter text-light-900 dark:text-dark-900 transition-colors duration-300'>Hi, I’m {about?.name??''} 👋</h1>
                    <p className='text-[16px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter'>{about?.shortDescription??''}</p>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='flex flex-row gap-[8px] items-center'>
                        <img src={theme === "light" ? lightLocation : darkLocation} alt="" className='w-[24px]' />
                        <p className='text-[16px] text-light-600 dark:text-dark-600 font-inter transition-colors duration-300'>{about?.location??''}</p>
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
                    <img onClick={()=>{window.open(contact?.linkedin, "_blank");}} src={theme === "light" ? lightLinkedin : darkLinkedin} alt="" className='w-[32px] cursor-pointer' />
                    <img onClick={()=>{window.open(contact?.leetcode, "_blank");}} src={theme === "light" ? lightLeetcode : darkLeetcode} alt="" className='w-[24px] cursor-pointer' />
                    <img onClick={()=>{window.open(contact?.github, "_blank");}} src={theme === "light" ? lightGithub : darkGithub} alt="" className='w-[24px] cursor-pointer' />
                </div>
            </div>
            <div className='relative w-[280px] h-[300px] sm:w-[300px] sm:h-[320px] md:w-[330px] md:h-[370px] px-[20px] md:px-0'>
                <div className='z-[10] absolute top-[30px] md:top-[40px] left-[10px] md:left-[40px] w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[280px] md:h-[320px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
                </div>
                <img src={about?.photo??''} alt="" className='relative  z-20 w-[240px] h-[280px] sm:w-[260px] sm:h-[300px] md:w-[280px] md:h-[320px] object-cover border-[10px] border-light-default dark:border-dark-default transition-colors duration-300' />
            </div>
        </div>
    )
}
