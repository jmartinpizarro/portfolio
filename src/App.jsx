import { useEffect, useState } from 'react';
import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';
import SocialMediaItem from './SocialMediaItem';
import DownloadButton from './DownloadButton';

function App(){
  const [startTyping, setStartTyping] = useState(false)
  const [secondStartTyping, setSecondStartTyping] = useState(false)
  const [thirdStartTyping, setThirdStartTyping] = useState(false)
  const [fourthStartTyping, setFourthStartTyping] = useState(false)

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

    const timer4 = setTimeout(() => {
      setFourthStartTyping(true)
    }, 4800)
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return(
    <>
      <FollowMouse></FollowMouse>
      <Navbar></Navbar>

      <section className='initContainer'>
        <img className='profile' src="./src/assets/fotoJMP.jpg" alt="Javier Martin perfil" />
        <h2 className="intro">Hola, soy <span className='intro-span'>Javier Martín</span></h2>
        <ul className="typingContainer">
          {startTyping && <TypingEffect phrase={'FrontEnd Web Developer'} />}
          {secondStartTyping && <TypingEffect phrase={'Freelancer'} />}
          {thirdStartTyping && <TypingEffect phrase={'Amante de la innovación'} />}
          {fourthStartTyping && <TypingEffect phrase={'Aspirante de la simplicidad'} />}
        </ul>

        <div className="socialMediaContainer">
          <SocialMediaItem image={'./src/assets/github.svg'} nameMedia={'Github'}></SocialMediaItem>
          <SocialMediaItem image={'./src/assets/linkedin.svg'} nameMedia={'LinkedIn'}></SocialMediaItem>
          <SocialMediaItem image={'./src/assets/email.svg'} nameMedia={'Email'}></SocialMediaItem>
        </div>

        <DownloadButton></DownloadButton>
      </section>

    </> 
  )
}

export default App
