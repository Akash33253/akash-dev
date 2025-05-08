import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Skills() {
    const context = useContext(ThemeContext);
    const { theme } = context;
    return (
        // <div id='skills' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[96px] px-[80px] flex flex-col items-center gap-[48px]'>
        //     <div className='flex flex-col items-center gap-[16px]'>
        //         <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
        //             <span className='text-[14] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Skills</span>
        //         </div>
        //         <p className='text-[20px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter'>The skills, tools and technologies I am really good at:</p>
        //     </div>
        //     <div className='flex flex-row gap-x-[80px] gap-y-[48px] flex-wrap w-full justify-between'>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-javscript.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Javascript</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-react.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>ReactJs</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-c++.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>C++</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={theme==='light'?require('../assets/images/icon-express.png'):require('../assets/images/icon-express-js-dark.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>ExpressJs</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-git.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Git</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icons-java.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Java</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-tailwindcss.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Tailwind</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-sql.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>SQL</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-mongodb.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>MongoDb</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-nodejs.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>NodeJs</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-react.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>React Native</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={theme==='light'?require('../assets/images/icon-socket.png'):require('../assets/images/icon-socket-dark.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Socket</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icons-spring-boot.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Spring Boot</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-figma.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Figma</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-angular.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Angular</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-bootstrap.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Bootstrap</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={theme==='light'?require('../assets/images/icons-expo.png'):require('../assets/images/icon-expo-dark.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Expo</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icons-c.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>C</h4>
        //         </div>
        //         <div className='flex flex-col gap-[8px] items-center'>
        //             <img src={require('../assets/images/icon-graphql.png')} alt="" className='h-[64px]' />
        //             <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>GraphQl</h4>
        //         </div>
        //     </div>
        // </div>
        <div id='skills' className='bg-light-default dark:bg-dark-default transition-colors duration-300 py-[64px] sm:py-[70px] md:py-[86px] lg:py-[96px] px-[16px] sm:px-[24px] md:px-[80px] flex flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[42px] lg:gap-[48px]'>
            <div className='flex flex-col items-center gap-[16px]'>
                <div className='px-[20px] py-[4px] bg-light-200 dark:bg-dark-200 transition-colors duration-300 rounded-[12px]'>
                    <span className='text-[14px] font-medium font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Skills</span>
                </div>
                <p className='text-[18px] sm:text-[20px] text-light-600 dark:text-dark-600 transition-colors duration-300 font-inter text-center'>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className='flex flex-row gap-x-[30px] sm:gap-x-[35px] md:gap-x-[70px] sm:gap-y-[18px] gap-y-[16px] md:gap-y-[42px] flex-wrap w-full justify-around'>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-javscript.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Javascript</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-react.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>ReactJs</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-c++.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>C++</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={theme === 'light' ? require('../assets/images/icon-express.png') : require('../assets/images/icon-express-js-dark.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>ExpressJs</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-git.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Git</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icons-java.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Java</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-tailwindcss.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Tailwind</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-sql.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>SQL</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-mongodb.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>MongoDb</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-nodejs.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>NodeJs</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-react.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>React Native</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={theme === 'light' ? require('../assets/images/icon-socket.png') : require('../assets/images/icon-socket-dark.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Socket</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icons-spring-boot.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Spring Boot</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-figma.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Figma</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-angular.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Angular</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-bootstrap.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Bootstrap</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={theme === 'light' ? require('../assets/images/icons-expo.png') : require('../assets/images/icon-expo-dark.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>Expo</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icons-c.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>C</h4>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <img src={require('../assets/images/icon-graphql.png')} alt="" className='h-[64px]' />
                    <h4 className='text-[18px] font-inter text-light-600 dark:text-dark-600 transition-colors duration-300'>GraphQl</h4>
                </div>
            </div>
        </div>
    )
}
