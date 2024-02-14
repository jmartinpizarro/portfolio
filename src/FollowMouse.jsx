import { useEffect, useState } from "react"

function FollowMouse(){
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMove = (event) => {
            const {clientX, clientY} = event
            setPosition({x: clientX, y: clientY})
        }

        window.addEventListener('mousemove', handleMove)
        return () =>{
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return (
        <>
            <div style={{
                position: 'fixed',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: position.x - 10 + 'px',
                top: position.y - 10 + 'px',
                width: 10,
                height: 10,
                transform: 'translate(0px, 0px)'}}
            />
        </>
    )
}

export default FollowMouse