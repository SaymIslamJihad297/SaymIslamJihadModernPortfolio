import React from 'react'
import './Project.css'
const Project = ({ img, Description, Name, LiveLink, GithubLink }) => {
    return (
        <div className=''>
            <div class="projectCard">
                <img src={img} alt="" />
                <div class="card__content">
                    <p class="card__title">{Name}
                    </p><p class="card__description">{Description}</p>
                    <div className='text-black underline flex justify-between'>
                        <a href={LiveLink} target='_blank'>Live Link</a>
                        <a href={GithubLink} target='_blank'>Github Link</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project