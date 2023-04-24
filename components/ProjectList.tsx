import { projectLinks } from '@/data'
import React from 'react'


// import component
import ProjectCard from './ProjectCard'

const ProjectList = () => {

    return (

        <div className="flex flex-col sm:gap-2 lg:gap-24 mt-16 md:gap-4">
            {
                projectLinks.map((item, index) => {
                    const { id, date, url, title, content, link, img } = item
                    return (

                        <ProjectCard
                            key={index}
                            id={id}
                            date={date}
                            url={url}
                            title={title}
                            content={content}
                            link={link}
                            img={img}
                        />

                    )
                })
            }


        </div>
    )
}

export default ProjectList