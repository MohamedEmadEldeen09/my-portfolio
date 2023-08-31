import React, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideNav from './SideNav'
import { useState } from 'react'
import themesColors from '../data/themesColors'
import music1 from '../music/Feeling-Good.mp3'
import music2 from '../music/Rainy.mp3'
import { manageSideMenuAndButton } from '../helperFunctions/manageSideMenu'

function Container() {
  const [showThemesColorsDiv , setShowThemesColorsDiv] = useState(false)
  const [darkTheme , setDarkTheme] = useState(false)
  const [playBackgroundMusic , setPlayBackgroundMusic] = useState(false)
  const musicDom = useRef(null)
  const [menuDisplayButton , setMenuDisplayButton] = useState(false)
  const [menuDisplay , setMenuDisplay] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/my-portfolio/main')
    
    setMenuDisplayButton(manageSideMenuAndButton())

    window.onresize = ()=>{
      if(window.innerWidth <= 830){
        const portfolioContainer = document.getElementById('portfolio-container-id')
        const sideMenu = document.getElementById('main-side-menu')
        if(sideMenu){
            sideMenu.classList.add('display-none')
        }
        if(portfolioContainer){
            portfolioContainer.style.gridTemplateColumns = '1fr'
        }
        
        if(!menuDisplay){
          setMenuDisplayButton(true)
        }      
      }

      if(window.innerWidth > 830){
        setMenuDisplayButton(false)
        setMenuDisplay(false)

        const portfolioContainer = document.getElementById('portfolio-container-id')
        const sideMenu = document.getElementById('main-side-menu')
        if(sideMenu){
            sideMenu.classList.remove('display-none')
        }
        if(portfolioContainer){
            portfolioContainer.style.gridTemplateColumns = '5% 95%'      
        }     
      } 
    }
  },[])

  const hnadleOpenChangeThemesDiv = (e)=>{
    if(showThemesColorsDiv){
      setShowThemesColorsDiv(false)   
    }
    if(!showThemesColorsDiv){
      setShowThemesColorsDiv(true)
    } 
  }

  const hnadleChangeTheme = (e)=>{
    themesColors.forEach(themeColor => {
      if(themeColor.mainColor == e.target.id){
        let r = document.querySelector(':root')
        r.style.setProperty('--mainColor',themeColor.mainColor)
        r.style.setProperty('--swiper-pagination-color',themeColor.mainColor)
        r.style.setProperty('--animateColor1',themeColor.animateColor1)
        r.style.setProperty('--animateColor2',themeColor.animateColor2)
        r.style.setProperty('--animateColor3',themeColor.animateColor3)
        setShowThemesColorsDiv(false)   
        return
      }
    })
    
  }
  
  const toggleTheme=()=>{
    if(darkTheme){
      let r = document.querySelector(':root')
      r.style.setProperty('--themeColor','white')
      r.style.setProperty('--fontMainColor','black')
      r.style.setProperty('--swiper-pagination-bullet-inactive-color','#000')
      r.style.setProperty('--swiper-slide-packgroundColor','white')
      setDarkTheme(false)
    }else{
      let r = document.querySelector(':root')
      r.style.setProperty('--themeColor','rgba(0, 0, 0, 0.801)')
      r.style.setProperty('--fontMainColor','white')
      r.style.setProperty('--swiper-pagination-bullet-inactive-color','#625e5e')
      r.style.setProperty('--swiper-slide-packgroundColor','black')
      setDarkTheme(true)
    }
  }
  
  const handleBackgroundMusic = ()=>{
    if(playBackgroundMusic){
      musicDom.current.pause()
      setPlayBackgroundMusic(false)      
    }else{
      musicDom.current.volume = '0.05'
      musicDom.current.play()   
      setPlayBackgroundMusic(true)
    }
  }
  
  const manageMenuDisplaying = ()=>{
    setMenuDisplay(true)
    setMenuDisplayButton(false)
  }

  const manageMenuHiding = ()=>{
    //الشرط ده مش ضروري في الكونتينر الاكبر ولكن
    //مهم علشان لما اجي اضغط علي الزراير اللي في ال
    //sidenav
    if(innerWidth <= 830){
      setMenuDisplay(false)
      setMenuDisplayButton(true)
    }  
  }

  return (
    <>
      {
        menuDisplayButton &&
        <button className='btn-menu' onClick={manageMenuDisplaying}>
          <ion-icon name="menu"></ion-icon>
        </button> 
      }

      {
        menuDisplay &&
        <>
          <div className='sidenav sidenav-second-version' id='second-side-menu'>
            <SideNav manageMenuHiding={manageMenuHiding}/>
          </div> 
          <button className='btn-menu btn-menu-close' onClick={manageMenuHiding}>
            <i className='bx bxs-chevron-left'></i>
          </button> 
        </>      
      }
      
      <div className='portfolio-container' id='portfolio-container-id'>
        {
          !menuDisplayButton && window.innerWidth >830 &&
          <div className='sidenav' id='main-side-menu'>
            <SideNav manageMenuHiding={manageMenuHiding}/>
          </div>        
        }

        <div className='components-pages'>       
          <div className='themes-div'>
            <audio loop src={music1} ref={musicDom} id='clip'></audio>
            {
              playBackgroundMusic ?
              <button className='btn-setting' onClick={handleBackgroundMusic}>
                <i className='bx bxs-volume-full'></i>
              </button>
              :
              <button className='btn-setting' onClick={handleBackgroundMusic}>
                <i className='bx bxs-volume-mute'></i>
              </button>
            }

            <button className='btn-setting' onClick={toggleTheme}>
              <i className='bx bxs-circle-three-quarter' ></i>
            </button>

            <button className='btn-setting' onClick={hnadleOpenChangeThemesDiv}>
              <i className='bx bxs-cog'></i></button>

            {
              showThemesColorsDiv &&
              <div className='themes-colors animate__animated animate__jackInTheBox' 
              id='colors-div-id'>
                <button className='btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='#99cc00' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='rgb(206, 0, 192)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>                
                <i id='rgb(199, 2, 38)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>                
                <i id='rgb(134, 3, 200)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='rgb(200, 85, 3)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='rgb(2, 187, 193)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='rgb(178, 187, 0)' className='bx bxs-coffee-bean'></i>
                </button>

                <button className='btn-color'  
                onClick={hnadleChangeTheme}>
                <i id='rgb(19, 3, 197)' className='bx bxs-coffee-bean'></i>
                </button>
              </div>
            }      
          </div>
          
          <Outlet />
        </div>
      </div>
    </>
    
  )
}

export default Container