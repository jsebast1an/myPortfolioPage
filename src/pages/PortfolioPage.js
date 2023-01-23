import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/portfolioPage.css'
import '../App.css'

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
                    
                </div>


            </main>

            <Footer />

        </div>
    )
}

export default PortfolioPage