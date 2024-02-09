import { useEffect, useState } from 'react';
import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';

function App(){
  const [startSecondTyping, setStartSecondTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSecondTyping(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return(
    <>
      <FollowMouse></FollowMouse>
      <Navbar></Navbar>
      <section className='initContainer'>
        <img className='profile' src="./src/assets/fotoJMP.jpg" alt="Javier Martin perfil" />
        <h2 className="intro">Hola, soy Javier Martín</h2>
        {startSecondTyping && <TypingEffect phrase={'Segundo TypingEffect que comienza después de 3 segundos'} />}
      </section>
    </>
  )
}

export default App
