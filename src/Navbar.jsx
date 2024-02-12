

function Navbar(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav className="navbar">
            <div className="logo-container">
                <h2 className="name">{'</> JMP'}</h2>
                <h3 className="subname">FrontEnd Developer</h3>
            </div>

            <ul className="element-container">
                <li className="element" onClick={() => scrollToSection('about-me')}>Sobre mí</li>
                <li className="element" onClick={() => scrollToSection('project')}>Proyectos</li>
                <li className="element" onClick={() => scrollToSection('contact')}>Contacto</li>
            </ul>
        </nav>
    )
}

export default Navbar;
