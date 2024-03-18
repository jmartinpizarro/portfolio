import PropTypes from 'prop-types';
import Skill from './Skill';

function ProjectCard({nameProject, descProject, repo, skills}){

    return(
        <a className='card-container' href={repo} target='_blank' rel="noreferrer">
            <div className="text-container">
                <h1 className='card-title' >{nameProject}</h1>
                <p className='card-p'>{descProject}</p>
            </div>
            <div className="skills-used">
                {skills.map((skill, index) => (
                    <Skill key={index} imgURL={`../${skill}.svg`} phrase={skill.toUpperCase()} className='sub-skill'/>
                ))}
            </div>
        </a>
    )
}

ProjectCard.propTypes = {
    nameProject: PropTypes.string.isRequired,
    descProject: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default ProjectCard