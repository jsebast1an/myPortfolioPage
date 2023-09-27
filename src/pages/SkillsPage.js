import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* imgs */
import html5 from '../imgs/html5.png'
import css3 from '../imgs/css3.png'
import sass from '../imgs/sass.png'
import bootstrap from '../imgs/bootstrap.png'
import js from '../imgs/js.png'
import jquery from '../imgs/jquery.png'
import nodejs from '../imgs/nodejs.png'
import express from '../imgs/express.png'
import reactjs from '../imgs/reactjs.png'
import php from '../imgs/php.png'
import laravel from '../imgs/laravel.png'
import mysql from '../imgs/mysql.png'
import mongodb from '../imgs/mongodb.png'
import git from '../imgs/git.png'
import github from '../imgs/github.png'

/* css */
import '../css/skillsPage.css'
import '../App.css'
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

//example 
<div data-aos="fade-up"></div>
function SkillsPage() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    },[]) 
    return (
        <div id='skills'>

            <main className='mainContainer'>
                <span className='mid_circle'></span>
                <h2 className='flexCenterContainer h2Title'>
                    <div className='flexRowWrapContainer'>
                        <FaIcons.FaGlobeAmericas /> <span>Abilities and</span> <strong>Skills</strong>
                    </div>
                </h2>

                <div className='skillsContainer'>
                    <div className='skills_card'>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={html5} alt='html'></img>
                            <h6>HTML5</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={css3} alt='html'></img>
                            <h6>CSS3</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={sass} alt='html'></img>
                            <h6>SASS</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={bootstrap} alt='html'></img>
                            <h6>Bootstrap</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={js} alt='html'></img>
                            <h6>JavaScript</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={jquery} alt='html'></img>
                            <h6>JQuery</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img className='mb-4' width={100} height={80} src={nodejs} alt='html'></img>
                            <h6>Node JS</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={reactjs} alt='html'></img>
                            <h6>ReactJS</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={express} alt='html'></img>
                            <h6>Express</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={php} alt='html'></img>
                            <h6>PHP</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={laravel} alt='html'></img>
                            <h6>Laravel</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={mysql} alt='html'></img>
                            <h6>MySQL</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={mongodb} alt='html'></img>
                            <h6>MongoDB</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={git} alt='html'></img>
                            <h6>Git</h6>
                        </div>
                        <div className='skill hvr-wobble-skew' data-aos="fade-left">
                            <img width={100} height={100} src={github} alt='html'></img>
                            <h6>GitHub</h6>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )   
}

export default SkillsPage