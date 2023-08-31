import React, { useRef, useState } from 'react'
import projects from '../data/projects'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCreative,Mousewheel,Keyboard, Pagination , Navigation} from 'swiper/modules';

function Projects() {
  const [frontendSlidesIsEnd , setFrontendSlidesIsEnd] = useState(false)
  const [frontendSlidesIsBeginning , setFrontendSlidesIsBeginning] = useState(true)
  const [fullstackSlidesIsEnd , setFullstackSlidesIsEnd] = useState(false)
  const [fullstackSlidesIsBeginning , setFullstackSlidesIsBeginning] = useState(true)

  const frontSliderRef = useRef(null)
  const fullstackSliderRef = useRef(null)

  const handlePrevieusSlide= (e)=>{
    if(e.target.id == 'frontend-btn-nav'){
      if (!frontSliderRef.current) return;
      frontSliderRef.current.swiper.slidePrev();
    }
    if(e.target.id == 'fullstack-btn-nav'){
      if (!fullstackSliderRef.current) return;
      fullstackSliderRef.current.swiper.slidePrev();
    }   
  }
  const handleNextSlide= (e)=>{
    if(e.target.id == 'frontend-btn-nav'){
      if (!frontSliderRef.current) return;
      frontSliderRef.current.swiper.slideNext();
    }
    if(e.target.id == 'fullstack-btn-nav'){
      if (!fullstackSliderRef.current) return;
      fullstackSliderRef.current.swiper.slideNext();
    }   
  }

  return (
    <div id='projects-page' 
    className='projects-component component-page animate__animated animate__fadeIn'>
      <div className='content-title animate__animated animate__flipInY'>
        <h1>
          <span className='icon-inline'><ion-icon name="code-slash-outline">
            </ion-icon></span>
          <span className='text-color'>My </span>Projects.
          <span className='icon-inline'><ion-icon name="code-slash-outline">
            </ion-icon></span>
        </h1>
      </div>
      
      <div className='projects-container'>
        <div className='frontend-projcts projects-container-div'>
          <div className='projects-slides-controllers'>      
            <button onClick={handlePrevieusSlide} disabled={frontendSlidesIsBeginning}
            className='slide-to-prev btn-nav-slide project-btn-nav-slide'
            id='frontend-btn-nav'>
              <i id='frontend-btn-nav' className='bx bx-chevron-left'></i>
            </button>
            <span className='projects-type-title'>FrontEnd</span>
            <button onClick={handleNextSlide} disabled={frontendSlidesIsEnd}
            className='slide-to-next btn-nav-slide project-btn-nav-slide'
            id='frontend-btn-nav'>
              <i id='frontend-btn-nav' className='bx bx-chevron-right'></i>
            </button>
          </div>     
          
          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ['-120%', 0, -500],
              },
              next: {
                shadow: false,
                translate: ['120%', 0, -500],
              },
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            pagination={{clickable:true}}
            modules={[EffectCreative ,Keyboard, Pagination , Navigation]}
            className="frontend-projects-swiper-cintainer projects-swiper-container"
            ref={frontSliderRef}
            onSlideChange={(slide)=>{
              if(slide.isEnd){
                setFrontendSlidesIsBeginning(false)
                setFrontendSlidesIsEnd(true)
              } 
              if(slide.isBeginning) {
                setFrontendSlidesIsBeginning(true)
                setFrontendSlidesIsEnd(false)
              }
              if(slide.isBeginning==false && slide.isEnd==false) {
                setFrontendSlidesIsBeginning(false)
                setFrontendSlidesIsEnd(false)
              }
            }}
            >       
              {
              projects.frontend.map((project , index)=>{
                return(
                  <SwiperSlide className='project-card' key={`fullstack-${index}`}>
                    <img src={(project.img)[0]} alt='project-image' loading='lazy'
                        className='project-image-0 project-image'/>  

                    <div className='project-content'>
                      <h3>{project.name}</h3>
                      <a target='_blank' href={project.src} className='project-icon'>
                        <i className='bx bxl-github'></i>
                      </a>
                      <a target='_blank' href={project.live} className='project-icon'>
                        <ion-icon name="earth"></ion-icon>
                      </a>                    
                    </div>
                  </SwiperSlide> 
                )
              })
            }
          </Swiper>
        </div>

        <div className='fullstack-projcts projects-container-div'>
          <div className='projects-slides-controllers'>      
            <button onClick={handlePrevieusSlide} disabled={fullstackSlidesIsBeginning}
            className='slide-to-prev btn-nav-slide project-btn-nav-slide'
            id='fullstack-btn-nav'>
              <i id='fullstack-btn-nav' className='bx bx-chevron-left'></i>
            </button>
            <span className='projects-type-title'>FullStack</span>
            <button onClick={handleNextSlide} disabled={fullstackSlidesIsEnd}
            className='slide-to-next btn-nav-slide project-btn-nav-slide'
            id='fullstack-btn-nav'>
              <i id='fullstack-btn-nav' className='bx bx-chevron-right'></i>
            </button>
          </div>     
          
          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
            prev: {
              shadow: false,
              translate: ['-125%', 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: false,
              translate: ['125%', 0, -800],
              rotate: [0, 0, 90],
            },
            }}
            navigation={true}   
            mousewheel={true}      
            pagination={{
              clickable:true
            }}          
            className="frontend-projects-swiper-cintainer projects-swiper-container"
            ref={fullstackSliderRef}
            modules={[EffectCreative,Mousewheel,Pagination, Navigation]}
            onSlideChange={(slide)=>{
              if(slide.isEnd){
                setFullstackSlidesIsBeginning(false)
                setFullstackSlidesIsEnd(true)
              } 
              if(slide.isBeginning) {
                setFullstackSlidesIsBeginning(true)
                setFullstackSlidesIsEnd(false)
              }
              if(slide.isBeginning==false && slide.isEnd==false) {
                setFullstackSlidesIsBeginning(false)
                setFullstackSlidesIsEnd(false)
              }
            }}
            >       
              {
              projects.fullstack.map((project , index)=>{
                return(
                  <SwiperSlide className='project-card' key={`fullstack-${index}`}>
                    <img src={(project.img)[0]} alt='project-image' loading='lazy'
                        className='project-image-0 project-image'/>  

                    <div className='project-content'>
                      <h3>{project.name}</h3>
                      <a target='_blank' href={project.src} className='project-icon'>
                        <i className='bx bxl-github'></i>
                      </a>
                      <a target='_blank' href={project.live} className='project-icon'>
                        <ion-icon name="earth"></ion-icon>
                      </a>                    
                    </div>
                  </SwiperSlide> 
                )
              })
            }
          </Swiper>
        </div>
      </div>     
    </div>
  )
}

export default Projects

