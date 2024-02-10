import { useEffect, useState } from 'react';
import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';
import SocialMediaItem from './SocialMediaItem';

function App(){
  const [startTyping, setStartTyping] = useState(false)
  const [secondStartTyping, setSecondStartTyping] = useState(false)
  const [thirdStartTyping, setThirdStartTyping] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStartTyping(true);
    }, 1000);
  
    const timer2 = setTimeout(() => {
      setSecondStartTyping(true);
    }, 2500);

    const timer3 = setTimeout(() => {
      setThirdStartTyping(true);
    }, 3300);
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return(
    <>
      <FollowMouse></FollowMouse>
      <Navbar></Navbar>

      <section className='initContainer'>
        <img className='profile' src="./src/assets/fotoJMP.jpg" alt="Javier Martin perfil" />
        <h2 className="intro">Hola, soy Javier Martín</h2>
        <ul className="typingContainer">
          {startTyping && <TypingEffect phrase={'FrontEnd Web Developer'} />}
          {secondStartTyping && <TypingEffect phrase={'Freelancer'} />}
          {thirdStartTyping && <TypingEffect phrase={'Amante de la innovación'} />}
        </ul>

        <div className="socialMediaContainer">
          <SocialMediaItem image={'./src/assets/github.svg'} nameMedia={'Github'}></SocialMediaItem>
          <SocialMediaItem image={'./src/assets/linkedin.svg'} nameMedia={'LinkedIn'}></SocialMediaItem>
        </div>
      </section>

    </> 
  )
}

export default App
