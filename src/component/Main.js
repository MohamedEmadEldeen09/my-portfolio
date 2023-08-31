import React from 'react'
import personal_image from '../images/personal/personal_1_image.png'
import {useNavigate} from 'react-router-dom'

function Main() {
  const navigate = useNavigate()
  const navigateToContact = ()=>{
    navigate('/my-portfolio/contact')
  }
  return (
    <div id='home-page' className='home-component component-page animate__animated animate__fadeIn'>
      <div className='avatar-div'>
        <img src={personal_image} loading='lazy' alt='avatar' className='avatar_img'/>
      </div>
  
      <div className='personal-info-apreviation'>
        <div className='name-job-title'>
          <span>Hello,i'm</span>
          <h1 className='animate__animated animate__bounce'>Mohamed <span>Emad</span></h1>
          <h4>full stack developer.</h4>
        </div>

        <div className='cv-div'>
          <button className='btn btn-download'>
            Donwnload CV
          <span><i className='bx bxs-download'></i></span> 
          </button>
          <button className='btn btn-contact' onClick={navigateToContact}>
            Contact me
            <span><i className='bx bx-chat'></i></span>
          </button>
        </div>

        <div className='socials-icons'>
          <a href='#' className='linkedin-icon'><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href='#' className='github-icon'><ion-icon name="logo-github"></ion-icon></a>         
        </div>
      </div>    
    </div>
  )
}

export default Main