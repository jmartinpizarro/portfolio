import {PropTypes} from 'prop-types'

function SocialMediaItem({image, nameMedia}){
    
    return(
        <p>this is a social media item</p>
    )
}

SocialMediaItem.propTypes = {
    image: PropTypes.string.isRequired,
    nameMedia: PropTypes.string.isRequired
  }
  

export default SocialMediaItem



