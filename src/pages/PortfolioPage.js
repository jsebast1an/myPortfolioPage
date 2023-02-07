import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as Bootstrap from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/portfolioPage.css'
import '../App.css'
/* imgs */
import project1 from '../imgs/project1.png'
import project2 from '../imgs/project2.png'
import project3 from '../imgs/project3.png'
import project4 from '../imgs/project4.png'


function PortfolioPage() {
    return (
        <div id='body'>

            <NavBar />

            <main className='mainContainer'>
                <h2 className='flexCenterContainer h2Title'>
                    <div className='flexRowWrapContainer'>
                        <FaIcons.FaPencilRuler /> <span>My</span> <strong>Projects</strong>
                    </div>
                </h2>

                <div className='projectsContainer'>
                    <div className='projectBox'>
                        <img width={300} height={300} src={project2} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>E-commerce Store</h4>
                            <p>
                                ReactJS basic store with database in <span>Firebase</span>, consuming
                                APIs. 
                            </p>
                            <div className='projectBox_buttons d-flex'>
                                <Bootstrap.Button href='https://flamboyant-perlman-99b3f2.netlify.app' variant='dark'>
                                    View <FaIcons.FaEye /> 
                                </Bootstrap.Button>

                                <Bootstrap.Button href='https://github.com/jsebast1an/Adidas' variant='warning'>
                                    Code <FaIcons.FaCode /> 
                                </Bootstrap.Button>
                            </div>
                        </div>
                    </div>
                    <div className='projectBox'>
                        <img width={300} height={300} src={project4} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>La Farola</h4>
                            <p>
                                Functional e-commerce store <span>La Farola.</span> Is a 90% JavaScript's page.
                            </p>
                            <div className='projectBox_buttons d-flex'>
                                <Bootstrap.Button href='https://flamboyant-perlman-99b3f2.netlify.app' variant='dark'>
                                    View <FaIcons.FaEye /> 
                                </Bootstrap.Button>

                                <Bootstrap.Button href='https://github.com/jsebast1an/LaFarola2' variant='warning'>
                                    Code <FaIcons.FaCode /> 
                                </Bootstrap.Button>
                            </div>
                        </div>
                    </div>
                    <div className='projectBox'>
                        <img width={300} height={300} src={project3} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>Static Page</h4>
                            <p>
                                Prototype for<span> La Farola - Fashion Store</span>. Using SASS for better compilation.
                            </p>
                            <div className='projectBox_buttons d-flex'>
                                <Bootstrap.Button href='https://jsebast1an.github.io/LaFarola/index.html' variant='dark'>
                                    View <FaIcons.FaEye /> 
                                </Bootstrap.Button>

                                <Bootstrap.Button href='https://github.com/jsebast1an/LaFarola' variant='warning'>
                                    Code <FaIcons.FaCode /> 
                                </Bootstrap.Button>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

            <Footer />

        </div>
    )
}

export default PortfolioPage