import React, { useState } from 'react';
import Logo from '../../assets/Logo.webp';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 w-full bg-[#ffffff1c] backdrop-blur-sm rounded-2xl'>
            <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
                <a href="#home">
                    <img className='h-12 rounded-full' src={Logo} alt="Logo" />
                </a>

                <div className='hidden md:flex gap-6 text-white cursor-pointer'>
                    <a href="#about"><p className='hover:border-b-2 border-blue-400 transition-all'>About</p></a>
                    <a href="#skills"><p className='hover:border-b-2 border-blue-400 transition-all'>Skills</p></a>
                    <a href="#projects"><p className='hover:border-b-2 border-blue-400 transition-all'>Projects</p></a>
                    <a href="#contactme"><p className='hover:border-b-2 border-blue-400 transition-all'>Contact</p></a>
                </div>
                <a href="#contactme">
                    <button className="hidden md:block relative px-6 py-2 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)]">
                        <span className="flex items-center space-x-2">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            <span>Hire Me</span>
                        </span>
                    </button>
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <i className="fa-solid fa-x text-2xl"></i>
                    ) : (
                        <i className="fa-solid fa-bars text-2xl"></i>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                <div className='flex flex-col items-center gap-4 py-4 text-white bg-[#000000cc] rounded-lg'>
                    <a href="#about"><p className='hover:border-b-2 border-blue-400 cursor-pointer' onClick={() => setIsOpen(false)}>About</p></a>
                    <a href="#skills"><p className='hover:border-b-2 border-blue-400 cursor-pointer' onClick={() => setIsOpen(false)}>Skills</p></a>
                    <a href="#projects"> <p className='hover:border-b-2 border-blue-400 cursor-pointer' onClick={() => setIsOpen(false)}>Projects</p></a>
                    <a href="#contactme"><p className='hover:border-b-2 border-blue-400 cursor-pointer' onClick={() => setIsOpen(false)}>Contact</p></a>
                    <a href="#contactme">
                        <button className="relative px-6 py-2 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)]">
                            <span className="flex items-center space-x-2">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                <span>Hire Me</span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
