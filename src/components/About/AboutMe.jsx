import React from 'react'
import BlackHole from '../additional/Cube';

const AboutMe = () => {
    return (
        <div>
            {/* about me section */}
            <section id='about' className='flex flex-col items-center mt-20'>
                <BlackHole />
                <div className='w-2/3 h-fit py-12 px-4 bg-[#1D1E22] flex flex-wrap items-center justify-around'>
                    <div>
                        <h1 className='text-5xl font-extrabold'>ABOUT <br /> ME</h1>
                    </div>
                    <div className='w-fit md:max-w-[30vw]'>
                        <span className='text-pink-400 font-bold'>I am Jihad Sheikh,</span> <br />
                        I am a full-stack MERN developer with strong expertise in both frontend and backend technologies. Proficient in React.js, Node.js, Express.js, and MongoDB, I build modern, scalable web applications. I have hands-on experience with authentication using Passport.js, session management with Express-session, and real-time features using Socket.io.
                        I am also skilled in UI/UX development with Tailwind CSS, DaisyUI, and animations using GSAP and Learning Three.js. Additionally
                    </div>
                </div>
            </section >
        </div>
    )
}

export default AboutMe