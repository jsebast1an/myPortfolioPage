import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

/* css */
import './navBar.css'
import '../../App.css'

const sections = [
    {
        name: 'Home',
        icon: <FaIcons.FaHome />,
        link: '/',
    },
    {
        name: 'About me',
        icon: <FaIcons.FaPersonBooth />,
        link: '/about_me',
    },
    {
        name: 'Skills',
        icon: <FaIcons.FaShekelSign />,
        link: '/skills',
    },
    {
        name: 'Portfolio',
        icon: <FaIcons.FaPortrait />,
        link: '/portfolio',
    },
    {
        name: 'Contact',
        icon: <FaIcons.FaFileContract />,
        link: '/contact',
    },
]

function NavBar() {
    return (

        <div>

            {/* PC navbar */}            
            <div id='sideBar' className='sideBar'>

                <div className='logoContainer'>
                    Juan López
                </div>

                <ul className='menuContainer'> 
                        <li>
                            <FaIcons.FaHome /> Home
                        </li>
                        <li>
                            About me
                        </li>
                        <li>
                            Skills
                        </li>
                        <li>
                            {/* <FaIcons.FaToolbox /> */} Portfolio
                        </li>
                        <li>
                            {/* <FaIcons.FaPhoneSquareAlt /> */} Contact
                        </li>
                </ul>

            </div>

            {/* Mobile navbar*/}

            <div className='mobile_nav'>
                <ul>
                    {
                        sections.map((section, index) => (
     
                                <li className='list' key={index}>
                                    <a className='' to={`${section.link}`}>
                                        <span className='icon'></span>
                                        <span className='text'>{section.name}</span>
                                    </a>
                                </li>
                                
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar