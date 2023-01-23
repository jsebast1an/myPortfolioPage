import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/portfolioPage.css'
import '../App.css'
/* imgs */
import project1 from '../imgs/project1.png'


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
                        <img width={300} height={300} src={project1} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>Proyecto 1</h4>
                            <p>
                                Lorem <span>entre span</span> ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet et
                                Lorem ipsum dolor sit ametLorem ipsum dolor sit
                            </p>
                        </div>
                    </div>
                    <div className='projectBox'>
                        <img width={300} height={300} src={project1} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>Proyecto 2</h4>
                            <p>
                                Lorem <span>entre span</span> ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet et
                                Lorem ipsum dolor sit ametLorem ipsum dolor sit
                            </p>
                        </div>
                    </div>
                    <div className='projectBox'>
                        <img width={300} height={300} src={project1} alt='html'></img>
                        <div className='projectBox_info'>
                            <h4>Proyecto 3</h4>
                            <p>
                                Lorem <span>entre span</span> ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet et
                                Lorem ipsum dolor sit ametLorem ipsum dolor sit
                            </p>
                        </div>
                    </div>
                </div>


            </main>

            <Footer />

        </div>
    )
}

export default PortfolioPage