import { useEffect, useState } from "react";

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
        }, 150)
        return () => clearInterval(intervalID)
    }, []) /*format of useEffect: chunk of text, when the useEffect is activated*/

    return(
        <h2>{displayedContent}</h2>
    )
}
