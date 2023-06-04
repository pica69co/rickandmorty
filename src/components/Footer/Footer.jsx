import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../Assets/images/facebook.png'
import github from '../../Assets/images/github.png'
import linkedin from '../../Assets/images/linkedin.png'
import postgre from '../../Assets/images/postgresql.png'
import express from '../../Assets/images/express.png'
import react from '../../Assets/images/react.png'
import node from '../../Assets/images/nodejs.png'
import css from '../../Assets/images/css.png'
import style from './Footer.module.css'


const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className="row p-5 pb-2 bg-dark text-white">
            <Link to={'/contact'}  className="col-xs-12 col-md-6 col-lg-3 link-offset-2 link-underline link-underline-opacity-0">
                <p className='h3 text-white'>Oscar Arrieta R.</p>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">FullStackDeveloper</div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">oscarwarrieta@gmail.com</div>
                </div>
            </Link>

            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5 mb-3 text-white'>Tecnologias</p>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">Postgresql <img className={style.Icon} src={postgre} alt='Icono de postgre' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">Express <img className={style.Icon} src={express} alt='Icono de express' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">React Js <img className={style.Icon} src={react} alt='Icono de react' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">Node <img className={style.Icon} src={node} alt='Icono de node' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-decoration-none">Html, css <img className={style.Icon} src={css} alt='Icono de css' /></div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5 mb-3 text-white'>Contacto</p>
                <div className="mb-2">
                <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://www.linkedin.com/in/oscar-w-arrieta-ramos-986700267/" rel='noreferrer'><img className={style.Icon} src={linkedin} alt='Icono de linkedIn' /></a>
                </div>
                <div className="mb-2">
                <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://github.com/pica69co" rel='noreferrer'><img className={style.Icon} src={github} alt='Icono de github' /></a>
                </div>
                <div className="mb-2">
                    <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://web.facebook.com/profile.php?id=100090650611801" rel='noreferrer'><img className={style.Icon} src={facebook} alt='Icono de facebook' /></a>
                    
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5 mb-3 text-white'>Proyectos</p>
                <div className="mb-2">
                   <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://github.com/pica69co" rel='noreferrer'>Videogames App</a>
                </div>
                {/* <div className="mb-2">
                    <a target="_blank" href="https://github.com/pica69co" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">e-Commerce</a>
                </div> */}
                <div className="mb-2">
                    
                    <a target="_blank" href="https://muscle-lab-six.vercel.app" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">MuscleLab Gym App</a>
                </div>
                <div className="mb-2">
                    <a target="_blank" href="https://github.com/pica69co" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">Employees Management System</a>
                </div>
                <div className="col-xs-12 pt-2">
                    <p className="text-white text-center">&copy; 2023 </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer