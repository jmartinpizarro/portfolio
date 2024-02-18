import PropTypes from 'prop-types';

function Skill({imgURL, phrase, className}){
    return(
        <p className={`skill-p ${className}`}>
            <img src={imgURL} alt={`skill of ${phrase}`} className='skill-img'/>
            {phrase}
        </p>
    )

}

Skill.propTypes = {
    imgURL: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Skill