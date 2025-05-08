import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FetchContext } from '../context/FetchContext';

export default function Skills() {
    const context = useContext(ThemeContext);
    const fContext = useContext(FetchContext);
    const { theme } = context;
    const { skills } = fContext
    return (
        <div id='skills' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px] lg:gap-[48px]'>
            <div className='flex flex-col items-center gap-[16px]'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Skills</span>
                </div>
                <p className='text-[18px] sm:text-[20px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter text-center'>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className='flex flex-row gap-x-[30px] sm:gap-x-[35px] md:gap-x-[70px] sm:gap-y-[18px] gap-y-[16px] md:gap-y-[42px] flex-wrap w-full justify-around'>
                {
                    skills?.map((skill, index) => {
                        return <div key={index} className='flex flex-col gap-[8px] items-center'>
                            <img src={theme === 'light' ? skill?.logoLight??'' : skill?.logoDark??''} alt="" className='h-[64px]' />
                            <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>{skill?.name ?? ''}</h4>
                        </div>

                    })
                }
            
            </div>
        </div>
    )
}
