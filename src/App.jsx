import './App.css';
import FollowMouse from './FollowMouse';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';

function App(){
  return(
    <>
      <FollowMouse></FollowMouse>
      <Navbar></Navbar>
      <TypingEffect phrase={'Soy Javier Martín, desarrollador web FrontEnd y creador de contenido'}></TypingEffect>
    </>
  )
}

export default App
