import PropTypes from 'prop-types';

function Skill({imgURL, phrase}){

    return(
        <p className='skill-p'>
            <img src={imgURL} alt={`skill of ${phrase}`} className='skill-img'/>
            {phrase}
        </p>
    )

}

Skill.propTypes = {
    imgURL: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
}

export default Skill