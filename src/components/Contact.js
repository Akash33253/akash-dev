import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FetchContext } from '../context/FetchContext';

export default function Contact() {
    const context  = useContext(ThemeContext);
    const fetchContext = useContext(FetchContext)
    const {theme} = context;
    const {contact} = fetchContext;
    return (
        
        <div id='contact' className='bg-light-50 dark:bg-dark-50 transition-colors duration-300 py-[64px] sm:py-[70px]  md:py-[86px] px-[16px] sm:px-[70px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px]'>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Get in touch</span>
                </div>
                <p className='text-[18px] md:text-[20px] font-inter text-light-600  dark:text-dark-600 transition-colors duration-300 text-center'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='flex flex-row gap-[16px] items-center'>
                    <img src={theme ==='light'? require('../assets/images/lightEmail.png'):require('../assets/images/darkEmail.png')} alt="" className='w-[24px] md:w-[28px]' />
                    <h3 className='font-semibold font-inter text-[18px] md:text-[22px] text-light-900 dark:text-dark-900 transition-colors duration-300'>{contact?.email??''}</h3>
                    <img src={theme ==='light'? require('../assets/images/lightCopy.png'):require('../assets/images/darkCopy.png')} alt="" className='w-[28px] md:w-[32px]' />
                </div>
                <div className='flex flex-row gap-[16px] items-center'>
                    <img src={theme ==='light'? require('../assets/images/lightCall.png'):require('../assets/images/darkCall.png')} alt="" className='w-[24px] md:w-[28px]' />
                    <h3 className='font-semibold font-inter text-[18px] md:text-[22px] text-light-900 dark:text-dark-900 transition-colors duration-300'>{contact?.phone??''}</h3>
                    <img src={theme ==='light'? require('../assets/images/lightCopy.png'):require('../assets/images/darkCopy.png')} alt="" className='w-[28px] md:w-[32px]' />
                </div>
            </div>
            <div className='flex flex-col gap-[8px] items-center'>
                <span className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>You may also find me on these platforms!</span>
                <div className='flex flex-row gap-[10px] items-center'>
                    <img onClick={()=>{window.open(contact?.linkedin,'_blank')}} src={theme ==='light'? require('../assets/images/lightLinkedin.png'):require('../assets/images/darkLinkedin.png')} alt="" className='w-[32px] cursor-pointer' />
                    <img onClick={()=>{window.open(contact?.leetcode,'_blank')}} src={theme ==='light'? require('../assets/images/lightLeetcode.png'):require('../assets/images/darkLeetcode.png')} alt="" className='w-[24px] cursor-pointer' />
                    <img onClick={()=>{window.open(contact?.github,'_blank')}} src={theme ==='light'? require('../assets/images/lightGithub.png'):require('../assets/images/darkGithub.png')} alt="" className='w-[24px] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
