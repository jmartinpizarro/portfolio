import { useEffect, useState } from 'react';
import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';
import SocialMediaItem from './SocialMediaItem';
import DownloadButton from './DownloadButton';
import CounterButton from './CounterButton';
import Skill from './Skill';
import ProjectCard from './ProjectCard';

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
          {fourthStartTyping && <TypingEffect phrase={'En búsqueda de la simplicidad'} />}
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
        
        <div>
          <h2 className='about-me-skills'>Habilidades</h2>
          <div className='skills-container1'>
            <Skill imgURL='./src/assets/html.svg' phrase='HTML'/>
            <Skill imgURL='./src/assets/css.svg' phrase='CSS'/>
            <Skill imgURL='./src/assets/javascript.svg' phrase='JavaScript'/>
            <Skill imgURL='./src/assets/python.svg' phrase='Python'/>
          </div>
          <div className='skills-container2'>
            <Skill imgURL='./src/assets/astro.svg' phrase='Astro'/>
            <Skill imgURL='./src/assets/react.svg' phrase='React'/>
            <Skill imgURL='./src/assets/c.svg' phrase='C'/>
            <Skill imgURL='./src/assets/sql.svg' phrase='SQL'/>
            <Skill imgURL='./src/assets/linux.svg' phrase='Linux'/>
          </div>
        </div>
      </section>

      <section id='project' className='project'>
        <h1 className='project-h1'>Echa un vistazo a mis trabajos!</h1>
        <div className="project-card-project-container">
          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>
          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>
          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>

          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>
          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>
          <ProjectCard nameProject={'ToDragList'} descProject={'Implementación de una lista con elementos que se deslizan por el tablero'} repo={'https://www.google.com/'} skills={['html', 'css', 'astro', 'react']}/>
        </div>
      </section>

      <section id='contact' className='contact'></section>

    </> 
  )
}

export default App
