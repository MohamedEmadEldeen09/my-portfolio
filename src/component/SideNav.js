import React from 'react'
import { NavLink} from 'react-router-dom'

function SideNav({manageMenuHiding}) { 
  
  return (
    <>
      <h1 className='animate__animated animate__swing'>
        M<span className='header-dot'>.</span>
      </h1>
      <nav className='sidenav-nav animate__animated animate__bounceInDown'>       
        <NavLink to='/my-portfolio/main' onClick={manageMenuHiding} 
        className='btn-icon-nav' id='nav-to-home'>
          <i id='nav-to-home' className='bx bxs-home'></i>
        </NavLink>

        <NavLink to='/my-portfolio/skills' onClick={manageMenuHiding} 
        className='btn-icon-nav' id='nav-to-skills'>
          <i id='nav-to-about' className='bx bxs-user-rectangle' ></i>
        </NavLink>

        <NavLink to='/my-portfolio/about' onClick={manageMenuHiding} 
        className='btn-icon-nav' id='nav-to-about'>
          {/* <i id='nav-to-about' className='bx bxs-user-account'></i> */}
          <i id='nav-to-about' className='bx bxs-graduation'></i>
        </NavLink>
        
        <NavLink to='/my-portfolio/services' onClick={manageMenuHiding} 
        className='btn-icon-nav' id='nav-to-services'>        
          <i id='nav-to-services' className='bx bxs-briefcase' ></i>
        </NavLink>

        <NavLink to='/my-portfolio/projects' onClick={manageMenuHiding} 
        className='btn-icon-nav'  id='nav-to-projects'>      
          <i id='nav-to-projects' className='bx bxs-layer'></i>
        </NavLink>

        <NavLink to='/my-portfolio/contact' onClick={manageMenuHiding}  
        className='btn-icon-nav'  id='nav-to-contact'>    
          <i id='nav-to-contact' className='bx bxs-chat'></i>
        </NavLink>      
      </nav>

      <p className='footer-nav'>&copy;2022-2023</p>
    </>
  )
}

export default SideNav