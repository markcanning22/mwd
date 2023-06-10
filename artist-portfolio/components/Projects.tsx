import React, { ReactElement } from 'react'
import './styles/Projects.pcss'

export type Project = {
    image: string
    name: string
}

export type ProjectsProps = {
    projects: Array<Project>
}

const Projects: React.FC<ProjectsProps> = ({ projects }): ReactElement => {
    return (
        <section className="project-container">
            {projects.map((project: Project) => (
                <div className="project">
                    <img
                        src={project.image}
                        className="project__image"
                        alt={project.name}
                    />
                    <h2 className="project__name">{project.name}</h2>
                </div>
            ))}
        </section>
    )
}

export default Projects
