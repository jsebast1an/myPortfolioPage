import * as FaIcons from 'react-icons/fa'
import * as Bootstrap from 'react-bootstrap'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { dbFirestore } from '../../firebase';

/* css */
import './contactForm.css'
import { MySwal } from '../SweetAlert';


function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    //para el modal
    const [showAlert, setShowAlert] = useState(false)


    //inicializar firebase
    const db = dbFirestore

    async function guardarFormulario(name, email, message) {
        try {
            const formulario = await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                message: message,
            });
            MySwal.fire({
                title: '¡Excelente!',
                text: `${name} estaré contactándome contigo a tu correo ${email},
                espero podamos trabajar juntos.` ,
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Listo',
            })
            console.log("Formulario guardado correctamente")
        } catch (error) {
            console.error("Error al guardar el formulario: ", error);
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        guardarFormulario(name, email, message)
        setShowAlert(true)
        setName("")
        setEmail("")
        setMessage("")
    }

    //cerrar modal
    const handleCancel = () => {
        setShowAlert(false)
    }

    return (
        <div id='contactFormContainer'>
            <h2 className='flexCenterContainer h2Title'>
                <div className='flexRowWrapContainer'>
                    <FaIcons.FaMailBulk /><span>Send me a </span> <strong>message</strong>
                </div>
            </h2>
            
            <div className='contact_form'>
                <form onSubmit={handleSubmit}>

                    <Bootstrap.FloatingLabel 
                        controlId='floatingInput'
                        label='Email address'
                        className='mb-3'
                    >
                        <Bootstrap.Form.Control 
                            name='email'
                            type='email'
                            value={email}
                            onChange={(event) => {setEmail(event.target.value)}}
                            />
                            
                    </Bootstrap.FloatingLabel>
                    
                    <Bootstrap.FloatingLabel 
                        controlId='floatingInput'
                        label='Name'
                        className='mb-3'
                    >
                        <Bootstrap.Form.Control 
                            name='name'
                            type='text'
                            value={name}
                                onChange={(event) => {setName(event.target.value)}}
                            />

                    </Bootstrap.FloatingLabel>

                    <Bootstrap.FloatingLabel 
                        controlId='floatingTextarea'
                        label='Message'
                        className='mb-3'
                    >
                        <Bootstrap.Form.Control 
                            name='message'
                            as='textarea'
                            value={message}
                            onChange={(event) => {setMessage(event.target.value)}}
                            style={{ height: '100px'}} />

                    </Bootstrap.FloatingLabel>
                    <Bootstrap.Button type='submit' variant='dark' >Send</Bootstrap.Button>
                </form>
            </div>

        </div>
    )
}

export default ContactForm