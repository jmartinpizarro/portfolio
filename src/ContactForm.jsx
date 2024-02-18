function ContactForm(){

    return(
        <>
            <h1 className="info">¿Quieres que me ponga manos a la obra?</h1>
            <form className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact-btn">Haz click, ¡que no muerdo!</button>
            </form>
        </>
    )
}

export default ContactForm