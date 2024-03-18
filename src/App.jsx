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
import ContactForm from './ContactForm';

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
        <img className='profile' src="../fotoJMP.jpg" alt="Javier Martin perfil" />
        <h2 className="intro">Hola mundo, soy <span className='intro-span'>Javier Martín</span></h2>
        <ul className="typingContainer">
          {startTyping && <TypingEffect phrase={'FrontEnd Web Developer'} />}
          {secondStartTyping && <TypingEffect phrase={'Freelancer'} />}
          {thirdStartTyping && <TypingEffect phrase={'Amante de la innovación'} />}
          {fourthStartTyping && <TypingEffect phrase={'En búsqueda de la simplicidad'} />}
        </ul>

        <div className="socialMediaContainer">
          <SocialMediaItem image={'../github.svg'} nameMedia={'Github'}></SocialMediaItem>
          <SocialMediaItem image={'../linkedin.svg'} nameMedia={'LinkedIn'}></SocialMediaItem>
          <SocialMediaItem image={'../email.svg'} nameMedia={'Email'}></SocialMediaItem>
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
            <Skill imgURL='../html.svg' phrase='HTML'/>
            <Skill imgURL='../css.svg' phrase='CSS'/>
            <Skill imgURL='../astro.svg' phrase='Astro'/>
            <Skill imgURL='../python.svg' phrase='Python'/>
            <Skill imgURL='../javascript.svg' phrase='JavaScript'/>
            <Skill imgURL='../react.svg' phrase='React'/>
            <Skill imgURL='../c.svg' phrase='C'/>
            <Skill imgURL='../sql.svg' phrase='SQL'/>
            <Skill imgURL='../linux.svg' phrase='Linux'/>
          </div>
        </div>
      </section>

      <section id='project' className='project'>
        <h1 className='project-h1'>¡Echa un vistazo a mis trabajos!</h1>
        <div className="project-card-project-container">
          <ProjectCard nameProject={'Sticky Notes'} descProject={'Implementación de una app de notas rápidas que se pueden mover por el tablero.'} repo={'https://bejewelled-fox-deb5b4.netlify.app'} skills={['html', 'css', 'react']}/>
          <ProjectCard nameProject={'Advice Generator App'} descProject={'Implementación de una aplicación que genera respuestas filosóficas usando APIs y JS'} repo={'https://advicegeneratorjmp.netlify.app'} skills={['html', 'css', 'javascript']}/>
          <ProjectCard nameProject={'React Weather App'} descProject={'Implementación de una app para obtener datos sobre el tiempo de una localización APIs en React'} repo={'https://mellow-snickerdoodle-41dff9.netlify.app'} skills={['html', 'react']}/>

          <ProjectCard nameProject={'Formulario Responsivo'} descProject={'Componente web. Implementación de un formulario dinámico.'} repo={'https://jmartinpizarro.github.io/newsletter-sign-up-with-success-message-main/'} skills={['html', 'css', 'javascript']}/>
          <ProjectCard nameProject={'Lista de Pacientes'} descProject={'Implementación de un software que permite guardar y borrar pacientes de un hospital'} repo={'https://jmartinpizarro.github.io/ListaPacientes/'} skills={['html', 'css', 'javascript']}/>
          <ProjectCard nameProject={'Componente de valoración'} descProject={'Implementación de un componente que permite al usuario opinar de un rango del 1 al 5'} repo={'https://jmartinpizarro.github.io/interactive-rating-component-main/'} skills={['html', 'css', 'javascript']}/>
        </div>
      </section>

      <section id='contact' className='contact'>
        <ContactForm/>
      </section>

    </> 
  )
}

export default App
