import React from 'react';
import './Header.css';
import MeHeader from '../../assets/MeHeader.png';
import CodeEditor from '../additional/Code';
import AboutMe from '../About/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../contact/ContactMe';

const Header = () => {
    return (
        <div className='mb-30'>
            <div id='home' className="relative h-screen px-2 flex flex-wrap justify-around items-center mb-20 overflow-hidden">
                <div className="max-w-[40rem] z-10">
                    {/* <h1 className="text-2xl font-bold">Saym Islam Jihad,</h1> */}
                    <button class="button" data-text="Awesome">
                        <span class="actual-text">&nbsp;saymislamjiahd&nbsp;</span>
                        <span aria-hidden="true" class="hover-text">&nbsp;saymislamjiahd&nbsp;</span>
                    </button>
                    <h1 className="text-5xl font-bold">MERN STACK WEB DEVELOPER</h1>
                </div>

                <div className="relative flex flex-col items-center">
                    <div className="absolute top-0 left-0 w-full h-full -z-10 flex justify-center items-center">
                        <div className="loader">
                            <div className="box flex justify-center items-center">
                                <h1>Saym</h1>
                            </div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>

                    <img src={MeHeader} alt="" className="relative z-10" />

                    {/* Red Strip Below Image */}
                    <div className="h-10 w-full flex justify-center">
                        <button className="relative h-12 px-8 border-2 border-white bg-[#171717] bg transition-all duration-75 select-none whitespace-nowrap font-semibold active:scale-95 group">
                            <span className="relative z-10 text-sm font-semibold">MERN STACK DEVELOPER</span>
                            {/* Hover Effects */}
                            <span className="absolute top-2 left-[-3px] w-[calc(100%+6px)] h-[calc(100%-16px)] bg-[#171717] transition-all duration-200 group-hover:h-[calc(100%-32px)] group-hover:top-4"></span>
                            <span className="absolute top-[-3px] left-2 w-[calc(100%-16px)] h-[calc(100%+6px)] bg-[#171717] transition-all duration-200 group-hover:w-[calc(100%-32px)] group-hover:left-4"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <CodeEditor />
            </div>

            <AboutMe />

            <section id='skills'>
                <h1 className='text-center text-3xl font-bold mt-10'>SKILLS</h1>
                <Skills />
            </section>

            {/* Projects */}
            <section className='min-h-96' id='projects'>
                <h1 className='text-center font-bold mt-10'>Projects</h1>
                <Projects />

                {/* contact me */}
            </section>
            <section className='flex justify-center' id='contactme'>
                <ContactMe />
            </section>
        </div >
    );
};

export default Header;
