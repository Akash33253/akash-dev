import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'

export default function Experience() {
    const context = useContext(FetchContext);
    const { exp } = context;
    return (
        <div id='exp' className='bg-light-50 dark:bg-dark-50 transition-colors duration-300 py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px] lg:gap-[48px]'>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Experience</span>
                </div>
                <p className='text-[18px] sm:text-[20px] font-inter text-center text-light-600 dark:text-dark-600 transition-colors duration-300'>Here is a quick summary of my most recent experiences:</p>
            </div>
            <div className='w-full flex flex-col gap-[24px] sm:gap-[28px] items-center md:px-[150px] lg:px-[80px] md:gap-[42px]'>
                {
                    exp?.map((elem, index) => {
                        return <div key={index} className='bg-light-default dark:bg-dark-100 transition-colors duration-300 p-[32px]  shadow-md rounded-[12px] flex flex-col sm:flex-row gap-[16px] md:gap-[20px]'>
                            <img src={elem?.logo} alt="" className='w-[100px] sm:w-[120px] md:w-[150px] self-start ' />
                            <div className='flex flex-col gap-[16px] sm:mx-[20px] md:mx-[40px]' >
                                <div>
                                    <h3 className='text-[18px] md:text-[20px]  font-inter font-semibold text-light-900 dark:text-dark-900 transition-colors duration-300'>{elem?.role??''}</h3>
                                    <h3 className='text-[12px] md:text-[14px]  font-inter  text-light-900 dark:text-dark-900 transition-colors duration-300'>{elem?.company??''}</h3>
                                </div>
                                <ul className='text-[14px] pl-[20px] text-light-600  dark:text-dark-600 transition-colors duration-300 font-inter list-disc list-inside'>
                                    {
                                        elem?.keyPoints?.map((point,index)=>{
                                            return <li key={index}>{point}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <span className='text-nowrap text-[16px] font-inter text-light-700 dark:text-dark-700 transition-colors duration-300 text-right'>{elem?.duration??''}</span>
                        </div>
                    })
                }

            </div>
        </div>
    )
}
