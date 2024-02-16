import PropTypes from 'prop-types';

function Skill({imgURL, phrase}){

    return(
        <p>
            <img src={imgURL} alt={`skill of ${phrase}`} />
            {phrase}
        </p>
    )

}

Skill.propTypes = {
    imgURL: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired
}

export default Skill