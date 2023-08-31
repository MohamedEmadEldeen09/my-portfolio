import React, { useEffect } from 'react'
import {Autoplay,EffectCards,EffectCreative,Pagination,
  Keyboard, Navigation} from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';
import skills from '../data/skills'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

function Skills() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div id='skills-page' className='skills-component component-page'>     
      <section className='skills-section'>
        <Swiper
          effect={'cards'}
          // creativeEffect={{
          //   prev: {
          //     shadow: false,
          //     translate: [0, 0, -400],
          //   },
          //   next: {
          //     translate: ['100%', 0, 0],
          //   },
          // }}     
          cardsEffect={{slideShadows:false}}    
          grabCursor={true} 
          navigation={true}
          keyboard={{enabled:true}}
          pagination={{clickable:true}}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,                    
          }}
          modules={[EffectCards ,Autoplay, Pagination , Keyboard , Navigation]}
          className="siklls-itself-container"
        >      
          <SwiperSlide className='skill-card'>
            <h2 className='skill-title'>Frontend</h2>
            <div className='skill-card-info'>
              {
                skills.frontend.map((skill , i)=>{
                  return(
                    <div className='skill-div' key={`frontend-skill-${i}`}>                 
                      <div className='list-style-div'></div>
                      <h4 className='skill-div-skill-name'>{skill.name}</h4>
                    </div>
                  )
                })
              }
            </div>        
          </SwiperSlide>

          <SwiperSlide className='skill-card'>
            <h2 className='skill-title'>Backend</h2>
            <div className='skill-card-info'>
              {
                skills.backend.map((skill , i)=>{
                  return(
                    <div className='skill-div' key={`frontend-skill-${i}`}>
                      <div className='list-style-div'></div>
                      <h4 className='skill-div-skill-name'>{skill.name}</h4>
                    </div>
                  )
                })
              }
            </div>
            
          </SwiperSlide>

          <SwiperSlide className='skill-card'>
            <h2 className='skill-title'>Programing Logic</h2>
            <div className='skill-card-info'>
              {
                skills.logic.map((skill , i)=>{
                  return(
                    <div className='skill-div' key={`frontend-skill-${i}`}>
                      <div className='list-style-div'></div>
                      <h4 className='skill-div-skill-name'>{skill.name}</h4>
                    </div>
                  )
                })
              }
            </div>         
          </SwiperSlide>

          <SwiperSlide className='skill-card'>
            <h2 className='skill-title'>General</h2>
            <div className='skill-card-info'>
              {
                skills.general.map((skill , i)=>{
                  return(
                    <div className='skill-div' key={`frontend-skill-${i}`}>
                      <div className='list-style-div'></div>
                      <h4 className='skill-div-skill-name'>{skill.name}</h4>
                    </div>
                  )
                })
              }
            </div>         
          </SwiperSlide>
        </Swiper>
      </section>
      
      <section className='siklls-aboutme skills-section' 
      data-aos="zoom-in-left"
      data-aos-duration="1000">
        <h3 className='title-section'>About Me</h3>
        <p className='paragraph-education'>
          If there is any required skill i do not know, i can search for and 
          learn it fast and adapt with it. i have passion in the computer science 
          field and i hope 
          to be best developer and makes people lives easier with some code.
        </p>

        <NavLink to='/my-portfolio/about' className='btn-read-more'>
          Read more <i className='bx bx-chevron-right'></i>
        </NavLink>
      </section>
    </div>
  )
}

export default Skills