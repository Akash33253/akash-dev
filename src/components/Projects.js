import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext';

export default function Projects() {
    const context = useContext(FetchContext);
    const { projects } = context;
    return (
        <div id='projects' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[64px] sm:py-[70px] md:py-[86px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px]'>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Projects</span>
                </div>
                <p className='text-[18px] sm:text-[20px] text-center font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Some of the noteworthy projects I have built:</p>
            </div>
            <div className='w-full flex flex-col  gap-[24px] sm:gap-[28px] md:gap-[42px] items-center md:px-[60px]'>
                {
                    projects?.map((project, index) => {
                        return <div key={index} className={`flex flex-col ${index % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}  sm:items-center md:justify-center bg-light-default dark:bg-dark-50 transition-colors duration-300  shadow-md rounded-[12px]`}>
                            <div className='bg-light-50 dark:bg-dark-200 transition-colors duration-300 p-[32px] md:p-[42px] rounded-[12px]'>
                                <img src={project?.thumbnail??''} alt="" className='w-[280px] sm:w-[300px] md:w-[420px]' />
                            </div>
                            <div className='sm:w-[60%]   flex flex-col gap-[24px] p-[32px] md:p-[42px]'>
                                <h4 className='text-light-900 dark:text-dark-900 transition-colors duration-300 font-inter font-semibold text-[18px] md:text-[20px]'>{project?.name ?? ''}</h4>
                                <p className='text-[16px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>{project?.description ?? ''}</p>
                                <div className='flex flex-row flex-wrap gap-[8px]'>
                                    {
                                        project?.skills?.map((skill, index) => {
                                           return <span key={index} className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>{skill}</span>
                                        })
                                    }
                                </div>
                                <img onClick={()=>{window.open(project?.sourceCode,"_blank")}} src={require('../assets/images/goto.png')} alt="" className='w-[36px] cursor-pointer' />
                            </div>
                        </div>
                    })
                }


            </div>


        </div>
    )
}
