function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo-container">
                <h2 className="name">{'</> JMP'}</h2>
                <h3 className="subname">FrontEnd Developer</h3>
            </div>

            <ul className="element-container">
                <li className="element">Sobre mí</li>
                <li className="element">Projectos</li>
                <li className="element">Contactos</li>
            </ul>
        </nav>
    )
}

export default Navbar