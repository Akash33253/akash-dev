import React from 'react'

export default function Projects() {
    return (
        // <div id='projects' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[96px] px-[80px] flex flex-col items-center gap-[48px]'>
        //     <div className='flex flex-col gap-[16px] items-center'>
        //         <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
        //             <span className='text-[14] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Projects</span>
        //         </div>
        //         <p className='text-[20px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Some of the noteworthy projects I have built:</p>
        //     </div>
        //     <div className='w-full px-[64px] flex flex-col gap-[48px]'>
        //         <div className='flex flex-row  bg-light-default dark:bg-dark-50 transition-colors duration-300  shadow-md rounded-[12px]'>
        //             <div className='w-1/2 bg-light-50 dark:bg-dark-200 transition-colors duration-300 p-[48px] rounded-[12px]'>
        //                 <img src={require('../assets/images/sampleProject.png')} alt="" className='w-[480px]' />
        //             </div>
        //             <div className='w-1/2 flex flex-col gap-[24px] p-[48px]'>
        //                 <h4 className='text-light-900 dark:text-dark-900 transition-colors duration-300 font-inter font-semibold text-[20px]'>Project 1</h4>
        //                 <p className='text-[16px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam omnis temporibus delectus eos! Aliquam alias eaque, perferendis cupiditate doloribus id eligendi ut quibusdam. Quasi, dolorum?</p>
        //                 <div className='flex flex-row flex-wrap gap-[8px]'>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                 </div>
        //                 <img src={require('../assets/images/goto.png')} alt="" className='w-[36px] cursor-pointer' />
        //             </div>
        //         </div>
        //         <div className='flex flex-row  bg-light-default dark:bg-dark-50 transition-colors duration-300  shadow-md rounded-[12px]'>

        //             <div className='w-1/2 flex flex-col gap-[24px] p-[48px]'>
        //                 <h4 className='text-light-900 dark:text-dark-900 transition-colors duration-300 font-inter font-semibold text-[20px]'>Project 1</h4>
        //                 <p className='text-[16px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam omnis temporibus delectus eos! Aliquam alias eaque, perferendis cupiditate doloribus id eligendi ut quibusdam. Quasi, dolorum?</p>
        //                 <div className='flex flex-row flex-wrap gap-[8px]'>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                     <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
        //                 </div>
        //                 <img src={require('../assets/images/goto.png')} alt="" className='w-[36px] cursor-pointer' />
        //             </div>
        //             <div className='w-1/2 bg-light-50 dark:bg-dark-200 transition-colors duration-300 p-[48px] rounded-[12px]'>
        //                 <img src={require('../assets/images/sampleProject.png')} alt="" className='w-[480px]' />
        //             </div>
        //         </div>
        //     </div>


        // </div>
        <div id='projects' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[64px] sm:py-[70px] md:py-[86px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px]'>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Projects</span>
                </div>
                <p className='text-[18px] sm:text-[20px] text-center font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Some of the noteworthy projects I have built:</p>
            </div>
            <div className='w-full flex flex-col  gap-[24px] sm:gap-[28px] md:gap-[42px] items-center md:px-[60px]'>
                <div className='flex flex-col sm:flex-row sm:items-center md:justify-center bg-light-default dark:bg-dark-50 transition-colors duration-300  shadow-md rounded-[12px]'>
                    <div className='bg-light-50 dark:bg-dark-200 transition-colors duration-300 p-[32px] md:p-[42px] rounded-[12px]'>
                        <img src={require('../assets/images/sampleProject.png')} alt="" className='w-[280px] sm:w-[300px] md:w-[420px]' />
                    </div>
                    <div className='sm:w-[60%]   flex flex-col gap-[24px] p-[32px] md:p-[42px]'>
                        <h4 className='text-light-900 dark:text-dark-900 transition-colors duration-300 font-inter font-semibold text-[18px] md:text-[20px]'>Project 1</h4>
                        <p className='text-[16px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam omnis temporibus delectus eos! Aliquam alias eaque, perferendis cupiditate doloribus id eligendi ut quibusdam. Quasi, dolorum?</p>
                        <div className='flex flex-row flex-wrap gap-[8px]'>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                        </div>
                        <img src={require('../assets/images/goto.png')} alt="" className='w-[36px] cursor-pointer' />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row-reverse sm:items-center md:justify-center bg-light-default dark:bg-dark-50 transition-colors duration-300  shadow-md rounded-[12px]'>
                    <div className='bg-light-50 dark:bg-dark-200 transition-colors duration-300 p-[32px] md:p-[42px] rounded-[12px]'>
                        <img src={require('../assets/images/sampleProject.png')} alt="" className='w-[280px] sm:w-[300px] md:w-[420px]' />
                    </div>
                    <div className='sm:w-[60%]   flex flex-col gap-[24px] p-[32px] md:p-[42px]'>
                        <h4 className='text-light-900 dark:text-dark-900 transition-colors duration-300 font-inter font-semibold text-[18px] md:text-[20px]'>Project 1</h4>
                        <p className='text-[16px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam omnis temporibus delectus eos! Aliquam alias eaque, perferendis cupiditate doloribus id eligendi ut quibusdam. Quasi, dolorum?</p>
                        <div className='flex flex-row flex-wrap gap-[8px]'>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                            <span className='px-[20px] py-[4px] rounded-[12px] bg-light-200 dark:bg-dark-200 dark:text-dark-600 transition-colors duration-300 text-light-600 font-inter font-medium text-[14px] text-center'>Skill</span>
                        </div>
                        <img src={require('../assets/images/goto.png')} alt="" className='w-[36px] cursor-pointer' />
                    </div>
                </div>

            </div>


        </div>
    )
}
