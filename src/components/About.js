import React, { useContext, useEffect, useRef } from 'react'
import { FetchContext } from '../context/FetchContext'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function About() {
    const context = useContext(FetchContext);
    const { about } = context;
    const profile2Ref = useRef(null);
    useEffect(() => {
        gsap.from(profile2Ref.current, {
            scrollTrigger: {
                trigger: profile2Ref.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 2,
            ease: 'power3.out',
        });
    }, []);
    return (
        <div id='about' className="bg-light-50 py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col  items-center gap-[24px] sm:gap-[28px] md:gap-[42px] lg:gap-[48px] dark:bg-dark-50 transition-colors duration-300">
            <div className='px-[20px] py-[4px] bg-light-200 rounded-[12px] dark:bg-dark-200 transition-colors duration-300'>
                <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>About me</span>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-[48px] md:gap-[80px] md:justify-between lg:justify-center items-center'>
                <div ref={profile2Ref} className='relative w-[320px] h-[370px] sm:w-[340px] sm:h-[390px] md:w-[450px] md:h-[530px]  px-[20px] md:pr-0 md:pl-[40px] '>
                    <div className='z-[10] absolute top-[30px] md:top-[40px] md:right-[40px] left-[10px] md:left-[0px] w-[300px] h-[340px] sm:w-[320px] sm:h-[360px] md:w-[400px] md:h-[480px] bg-light-200 dark:bg-dark-200 transition-colors duration-300'>
                    </div>
                    <img src={about?.secondaryPhoto ?? ''} alt="" className='relative  z-20 w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] md:w-[400px] md:h-[480px] object-cover border-[10px] border-light-50 dark:border-dark-50 transition-colors duration-300' />
                </div>
                <div className='flex flex-col gap-[24px] w-full md:w-[55%] '>
                    <h2 className='text-[24px] sm:text-[28px] md-[30px] font-inter font-semibold text-light-900 dark:text-dark-900 transition-colors duration-300'>Curious about me? Here you have it:</h2>
                    <div className='flex flex-col gap-[16px]'>
                        {
                            about?.description.map((para, index) => {
                                return <p key={index} className='text-light-600 dark:text-dark-600 transition-colors duration-300 text-[16px] font-inter'>{para}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
