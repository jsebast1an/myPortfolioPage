import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/contactPage.css'
import '../App.css'
import ContactForm from '../components/ContactForm/ContactForm'
import { useEffect, useState } from 'react'
/* import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore"; */
import { dbFirestore } from '../firebase'


function ContactPage() {
    const messageId = 'GfPQs3oWYmLJDB6FNAei'
    const loading = false
    /* const [loading, setLoading] = useState(false)
    const [item, setItem] = useState({}) */

    //iniciar firebase
    const db = dbFirestore;

    useEffect(() => {
        /* 
        //para buscar por collection 
        const collectionRef = collection(db, "messages");
        getDocs(collectionRef)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            // Mostrar los datos del documento en la consola
            console.log(`${doc.id} => ${doc.data()}`);
            });
        })
        .catch((error) => {
            console.log("Error al obtener la colección:", error);
        }) */

        //para buscar por item se aumenta un parametro, que seria el id 
        /* const docRef = doc(db, "messages", messageId);
        getDoc(docRef)
        .then( (doc) => {
            if (doc.exists()) {
                setItem({id: doc.id, ...doc.data()})
                console.log(doc.data());
            } else {
                console.log('no existe el doc');
            }
        })
        .catch(err => console.log(err))
        .finally( () => {
            setLoading(false) 
        } ) */


        
    }, [])
    

    return (
        <div id='body'>

            <NavBar />

            {
                loading ? <div className="text-center">
                
                                <h2> Cargando </h2>
                            </div> :
                <main className='mainContainer'>


                    <div className='contactContainer'>

                        <div className='contact_intro'>

                            <h2>
                                Let's chat.
                            </h2>
                            <h4>
                                Tell <strong>me</strong> about
                                your project.
                            </h4>
                            <p>
                                We can create something together.
                            </p>

                            <div className='contact_intro_social flexRowWrapContainer social_icons'>
                                <div className='flexRowWrapContainer social_icons'>
                                    <div className="box">
                                        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                                            <FaIcons.FaFacebook />
                                        </a>
                                    </div>
                                    <div className="box">
                                        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                                            <FaIcons.FaGithub />
                                        </a>
                                    </div>
                                    <div className="box">
                                        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                                            <FaIcons.FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />

                    </div>

                </main>
            }

            <Footer />

        </div>
    )
}

export default ContactPage