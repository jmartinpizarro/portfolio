import PropTypes from 'prop-types';
import Skill from './Skill';

function ProjectCard({nameProject, descProject, repo, skills}){

    return(
        <div className='card-container'>
            <div className="text-container">
                <a className='card-title' href={repo} target='_blank' rel="noreferrer">{nameProject}</a>
                <p className='card-p'>{descProject}</p>
            </div>
            <div className="skills-used">
                {skills.map((skill, index) => (
                    <Skill key={index} imgURL={`../${skill}.svg`} phrase={skill.toUpperCase()} className='sub-skill'/>
                ))}
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    nameProject: PropTypes.string.isRequired,
    descProject: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default ProjectCard