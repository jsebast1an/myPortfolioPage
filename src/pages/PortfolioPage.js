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
import projectTodoSi from '../imgs/projectTodoSi.png'


function PortfolioPage() {

    let projects = [
        {
            title: 'Full e-commerce store',
            description: 'Laravel 9.0 project with auth, mailable and DB in <span>MySQL</span> consuming APIs.',
            view_url: 'https://flamboyant-perlman-99b3f2.netlify.app' ,
            code_url: 'https://github.com/jsebast1an/Adidas',
            img: project1
        },
        {
            title: 'E-commerce Store',
            description: 'ReactJS basic store with database in <span>Firebase</span>, consuming APIs. ',
            view_url: 'https://flamboyant-perlman-99b3f2.netlify.app' ,
            code_url: 'https://github.com/jsebast1an/Adidas',
            img: project2
        },
        {
            title: 'Todo Si Dropshipping',
            description: 'Project for <span>Todo Si - Online Store</span>. Builded in ReactJS with FireBase.',
            view_url: 'https://flamboyant-perlman-99b3f2.netlify.app' ,
            code_url: 'https://github.com/jsebast1an/Adidas',
            img: projectTodoSi
        },
        {
            title: 'La Farola',
            description: 'Functional e-commerce store <span>La Farola.</span> Is a 90% JavaScript\'s page.',
            view_url: 'https://flamboyant-perlman-99b3f2.netlify.app' ,
            code_url: 'https://github.com/jsebast1an/LaFarola2',
            img: project4
        },
        {
            title: 'Static Page',
            description: 'Prototype for<span> La Farola - Fashion Store</span>. Using SASS for better compilation.',
            view_url: 'https://jsebast1an.github.io/LaFarola/index.html' ,
            code_url: 'https://github.com/jsebast1an/LaFarola',
            img: project3
        },
        {
            title: 'Static Page',
            description: 'Prototype for<span> La Farola - Fashion Store</span>. Using SASS for better compilation.',
            view_url: 'https://jsebast1an.github.io/LaFarola/index.html' ,
            code_url: 'https://github.com/jsebast1an/LaFarola',
            img: project3
        },
    ]

    return (
        <div id='portfolio'>

            <h2 className='flexCenterContainer h2Title portfolio_title'>
                <div className='flexRowWrapContainer'>
                    <FaIcons.FaPencilRuler /> <span>My</span> <strong>Projects</strong>
                </div>
            </h2>

            <div className='projectsContainer'>

                {
                        projects.map((project, index) => (

                            <div className='projectBox'>
                                <img width={300} height={300} src={project.img} alt={`port_img_${index}`}></img>

                                    <div key={index} className='projectBox_info'>
                                        <h4>{project.title}</h4>
                                        
                                        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                        <div className='projectBox_buttons d-flex'>
                                            <Bootstrap.Button href={project.view_url} variant='dark'>
                                                View <FaIcons.FaEye /> 
                                            </Bootstrap.Button>

                                            <Bootstrap.Button href={project.code_url} variant='warning'>
                                                Code <FaIcons.FaCode /> 
                                            </Bootstrap.Button>
                                        </div>
                                    </div>
                            </div>
                        )) 
                    }
            </div>

            <div class="custom-shape-divider-top-1695925125">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>

            

        </div>
    )
}

export default PortfolioPage