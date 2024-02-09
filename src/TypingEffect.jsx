import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



function TypingEffect({phrase}){
    const [displayedContent, setDisplayedContent] = useState('')

    useEffect(() => {
        let index = 0
        const intervalID = setInterval(() => {
            if (index <= phrase.length){
                setDisplayedContent(phrase.substring(0, index))
                index++
            } else {
                clearInterval(intervalID)
            }
        }, 50)
        return () => clearInterval(intervalID)
    }, [phrase]) /*format of useEffect: chunk of text, when the useEffect is activated*/

    return(
        <p className="dynamicText">{displayedContent}</p>
    )
}
TypingEffect.propTypes = {
    phrase: PropTypes.string.isRequired
  }
  

export default TypingEffect
