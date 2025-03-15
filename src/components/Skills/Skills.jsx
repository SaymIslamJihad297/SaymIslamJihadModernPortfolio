import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section className='mt-10 mx-5 flex flex-col gap-2 md:flex-row items-center md:items-start md:justify-around'>

            <div className="card p-6 rounded-lg shadow-lg bg-white text-md">
                <h1 className='text-xl font-bold text-center'>Frontend</h1>
                <div className='flex flex-wrap gap-5 md:gap-20'>
                    <p ><i className="fa-brands fa-html5 text-[#E16127]"></i><span className='text-white'>HTML</span></p>
                    <p ><i class="fa-brands fa-css3-alt text-[#3053E5]"></i><span className='text-white'>CSS</span></p>
                    <p ><i class="fa-solid fa-file-code text-[#536ed8]"></i><span className='text-white'>TAILWIND CSS</span></p>
                    <p ><i class="fa-brands fa-css3-alt text-yellow-400"></i><span className='text-white'>JAVASCRIPT</span></p>
                    <p ><i class="fa-brands fa-react text-[#6ED9FD]"></i><span className='text-white'>REACT</span></p>
                    <p ><i class="fa-solid fa-cube"></i><span className='text-white'>THREE JS BASICS</span></p>
                    <p ><i class="fa-brands fa-bootstrap text-purple-600"></i><span className='text-white'>BOOTSTRAP</span></p>
                    <p ><i class="fa-brands fa-uikit text-green-300"></i><span className='text-white'>DAISY UI</span></p>
                    <p className='text-blue-400'><i class="fa-solid fa-palette"></i><span className='text-white'>MATERIAL UI</span></p>
                    <p className='text-green-400'><i class="fa-solid fa-snowflake"></i><span className='text-white'>GSAP</span></p>
                </div>
            </div>
            <div className="card p-6 rounded-lg shadow-lg bg-white">
                <h1 className='text-center font-bold'>Backend</h1>
                <div>
                    <div className='flex flex-wrap gap-5 md:gap-20'>
                        <p ><i class="fa-solid fa-database text-green-500"></i><span className='text-white'>MONGO DB</span></p>
                        <p ><i class="fa-solid fa-server text-yellow-300"></i><span className='text-white'>EXPRESS JS</span></p>
                        <p ><i class="fa-brands fa-node text-green-400"></i><span className='text-white'>NODE JS</span></p>
                        <p ><i class="fa-solid fa-p text-yellow-300"></i><span className='text-white'>PASSPORT JS</span></p>
                        <p ><i class="fa-solid fa-rocket text-blue-300"></i><span className='text-white'>SOCKET.IO</span></p>
                        <p ><i class="fa-solid fa-tape"></i><span className='text-white'>RESTful APIs</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills