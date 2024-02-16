import { useEffect, useState } from 'react';
import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';
import SocialMediaItem from './SocialMediaItem';
import DownloadButton from './DownloadButton';
import CounterButton from './CounterButton';
import Skill from './Skill';

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

      <section className='initContainer' id='landing'>
        <img className='profile' src="./src/assets/fotoJMP.jpg" alt="Javier Martin perfil" />
        <h2 className="intro">Hola mundo, soy <span className='intro-span'>Javier Martín</span></h2>
        <ul className="typingContainer">
          {startTyping && <TypingEffect phrase={'FrontEnd Web Developer'} />}
          {secondStartTyping && <TypingEffect phrase={'Freelancer'} />}
          {thirdStartTyping && <TypingEffect phrase={'Amante de la innovación'} />}
          {fourthStartTyping && <TypingEffect phrase={'Y ante todo: lo simple'} />}
        </ul>

        <div className="socialMediaContainer">
          <SocialMediaItem image={'./src/assets/github.svg'} nameMedia={'Github'}></SocialMediaItem>
          <SocialMediaItem image={'./src/assets/linkedin.svg'} nameMedia={'LinkedIn'}></SocialMediaItem>
          <SocialMediaItem image={'./src/assets/email.svg'} nameMedia={'Email'}></SocialMediaItem>
        </div>

        <DownloadButton></DownloadButton>
      </section>


      <section id='about-me' className='about-me'>
        <h1 className="about-me-h1">¿Quieres conocerme?</h1>
        <div className="about-me-flex-container">
          <div>
            <p className='about-me-p'>Soy estudiante de Computer Science and Engineering en la Universidad Carlos III de Madrid, con <span className='about-me-p-span'>más de dos años de experiencia programando</span>.</p>
            <p className='about-me-p'>Me considero una persona proactiva y creativa, apasionada por el desarrollo web y comprometida con ofrecer soluciones innovadoras y de calidad.</p>
            <p className='about-me-p'><span className='about-me-p-span2'>¿Qué harías si tuvieras un desarrollador con estas habilidades a tu alcance?</span></p>
          </div>
          <CounterButton></CounterButton>

        </div>
        <h2 className='about-me-skills'>Habilidades</h2>
        <div className='skills-container'>
          <Skill imgURL='./src/assets/html.svg' phrase='HTML'/>
          <Skill imgURL='./src/assets/css.svg' phrase='CSS'/>
          <Skill imgURL='./src/assets/javascript.svg' phrase='JavaScript'/>
          <Skill imgURL='./src/assets/python.svg' phrase='Python'/>
        </div>
      </section>

      <section id='project' className='project'></section>

      <section id='contact' className='contact'></section>

    </> 
  )
}

export default App
