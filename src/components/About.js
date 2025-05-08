import React from 'react'
import profile2 from '../../src/assets/images/profile2.jpg'
export default function About() {

    return (
        // <div id='about' className="bg-light-50 py-[96px] px-[80px] flex flex-col items-center gap-[48px] dark:bg-dark-50 transition-colors duration-300">
        //     <div className='px-[20px] py-[4px] bg-light-200 rounded-[12px] dark:bg-dark-200 transition-colors duration-300'>
        //         <span className='text-[14] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>About me</span>
        //     </div>
        //     <div className='w-full flex flex-row gap-[100px] justify-between'>
        //         <div className='relative w-[450px] h-[530px]  flex items-end flex-col'>
        //             <div className='z-[10] absolute top-[40px] right-[40px] w-[400px] h-[480px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
        //             </div>
        //             <img src={profile2} alt="" className='relative  z-20 w-[400px] h-[480px] object-cover border-[10px] border-light-50 dark:border-dark-50 transition-colors duration-300' />
        //         </div>
        //         <div className='flex flex-col gap-[24px] w-[50%]'>
        //             <h2 className='text-[30px] font-inter font-semibold text-light-900 dark:text-dark-900 transition-colors duration-300'>Curious about me? Here you have it:</h2>
        //             <div className='flex flex-col gap-[10px]'>
        //                 <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
        //                 <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
        //                 <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
        //                 <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
        //                 <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>Finally, some quick bits about me.</p>
        //                 <div className='flex flex-row items-center justify-between'>

        //                     <ul className='flex flex-col gap-y-[10px] text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter list-disc list-inside'>
        //                         <li>B.E. in Computer Engineering</li>
        //                         <li>Avid learner</li>
        //                     </ul>
        //                     <ul className='flex flex-col gap-y-[10px] text-light-600  dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter list-disc list-inside'>
        //                         <li>Full time freelancer</li>
        //                         <li>Aspiring indie hacker</li>
        //                     </ul>
        //                 </div>
        //                 <p className='text-light-600  dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id='about' className="bg-light-50 py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col  items-center gap-[24px] sm:gap-[28px] md:gap-[42px] lg:gap-[48px] dark:bg-dark-50 transition-colors duration-300">
            <div className='px-[20px] py-[4px] bg-light-200 rounded-[12px] dark:bg-dark-200 transition-colors duration-300'>
                <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>About me</span>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-[48px] md:gap-[80px] md:justify-between lg:justify-center items-center'>
                <div className='relative w-[320px] h-[370px] sm:w-[340px] sm:h-[390px] md:w-[450px] md:h-[530px]  px-[20px] md:pr-0 md:pl-[40px] '>
                    <div className='z-[10] absolute top-[30px] md:top-[40px] md:right-[40px] left-[10px] md:left-[0px] w-[300px] h-[340px] sm:w-[320px] sm:h-[360px] md:w-[400px] md:h-[480px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
                    </div>
                    <img src={profile2} alt="" className='relative  z-20 w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] md:w-[400px] md:h-[480px] object-cover border-[10px] border-light-50 dark:border-dark-50 transition-colors duration-300' />
                </div>
                <div className='flex flex-col gap-[24px] w-full md:w-[55%] '>
                    <h2 className='text-[24px] sm:text-[28px] md-[30px] font-inter font-semibold text-light-900 dark:text-dark-900 transition-colors duration-300'>Curious about me? Here you have it:</h2>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                        <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                        <p className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>Finally, some quick bits about me.</p>
                        <div className='flex flex-row items-center justify-between'>

                            <ul className='flex flex-col gap-y-[10px] text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter list-disc list-inside'>
                                <li>B.E. in Computer Engineering</li>
                                <li>Avid learner</li>
                            </ul>
                            <ul className='flex flex-col gap-y-[10px] text-light-600  dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter list-disc list-inside'>
                                <li>Full time freelancer</li>
                                <li>Aspiring indie hacker</li>
                            </ul>
                        </div>
                        <p className='text-light-600  dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
