import React from 'react'
import Project from './Project'
import Greenwrite from "/GreenWrite.png";
import LoopIT from '/LoopIT.png'
import Airbnb from '/Airbnb.png'

const Projects = () => {
    return (
        <div className='flex justify-around flex-wrap gap-5 mt-10'>
            <Project img={Greenwrite} Description={"GreenWrite Pen is an eco-friendly, plantable paper pen designed to 	reduce plastic waste while promoting sustainability. The pen is made from 	biodegradable paper and contains a tree seed that can be planted after 	use. Alongside the product, a web application was developed to manage 	sales, reviews, and user interactions."} LiveLink={"https://greenwrite-pen.onrender.com/"} GithubLink={"https://github.com/SaymIslamJihad297/GREENWRITE-PENS"} Name={"GreenWrite"} />
            <Project img={LoopIT} Description={"This project is designed for an offline coaching center to manage their 	website content. The admin can create posts, such as course lists, and 	has the ability to add, edit, or delete courses."} LiveLink={"https://loop-it.onrender.com/"} GithubLink={"https://github.com/SaymIslamJihad297/LOOP-IT"} Name={"LoopIT"} />
            <Project img={Airbnb} Description={"I have developed a full-stack application inspired by Airbnb. It is a 	simplified version of the platform, designed using the MVC framework 	to organize and structure the files effectively."} LiveLink={"https://fullstack-house-booking-project.onrender.com"} GithubLink={"https://github.com/SaymIslamJihad297/FULLSTACK-HOUSE-BOOKING-PROJECT"} Name={"•WanderLust"} />
        </div>
    )
}

export default Projects