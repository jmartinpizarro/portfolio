import {PropTypes} from 'prop-types'

function SocialMediaItem({image, nameMedia}){
    let link = ''
    switch (nameMedia){
        case 'Github':
            link = 'https://github.com/jmartinpizarro'
            break
        case 'LinkedIn':
            link = 'https://www.linkedin.com/in/javier-mart%C3%ADn-pizarro-824b94264/'
            break

    }

    if (nameMedia == 'Email'){
        return(
            <a className="media-container" href={`mailto:jmartinpizarro04@gmail.com`} target='_blank' rel="noreferrer">
                <img src={image} alt={`display of ${nameMedia}`} className='icon'/>
                <p className='nameMedia'>{nameMedia}</p>
            </a>
        )
    }

    return(
        <a className="media-container" href={link} target='_blank' rel="noreferrer">
            <img src={image} alt={`display of ${nameMedia}`} className='icon'/>
            <p className='nameMedia'>{nameMedia}</p>
        </a>
    )
}

SocialMediaItem.propTypes = {
    image: PropTypes.string.isRequired,
    nameMedia: PropTypes.string.isRequired
  }
  

export default SocialMediaItem



