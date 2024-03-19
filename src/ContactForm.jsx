function ContactForm(){

    const submitToSheets = (e) => {
        e.preventDefault()
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxgC9P48NcTsZmTVIq5TuFgXlEIPZMexi85bRpeLXkYmdjt2JwlBO1jD9Zg6Qu6-Kad/exec'

        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
        .then(response => console.log('¡Éxito!', response))
        .catch(error => console.error('¡Error!', error.message))
        .then(handleClick);
    }

    const handleClick = () => {
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const message = document.getElementById('message')

        name.value = ''
        email.value = ''
        message.value = ''
    }


    return(
        <>
            <h1 className="info">¿Quieres que me ponga manos a la obra?</h1>
            <form className="contact-form" name="contact-form" onSubmit={submitToSheets}>
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
