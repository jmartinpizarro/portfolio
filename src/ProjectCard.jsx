import PropTypes from 'prop-types';

function ProjectCard({imgURL, nameProject, descProject, demo, repo}){

    return(
        <div className='card-container'>
            <img src={imgURL} alt={`${nameProject} small image`}/>
            <div className="text-container">
                <h1 className="card-h1">{nameProject}</h1>
                <p className='card-p'>{descProject}</p>
            </div>
            <div className="button-container">
                <button className="project-btn"><a href={demo}>Pásate por la DEMO</a></button>
                <button className="project-btn"><a href={repo}>El repositorio es gratis!</a></button>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    nameProject: PropTypes.string.isRequired,
    descProject: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired
}

export default ProjectCard