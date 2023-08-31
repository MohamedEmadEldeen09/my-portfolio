import React, { useEffect, useRef, useState } from 'react'
import services from '../data/services'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Pagination,Autoplay ,FreeMode,Mousewheel,Keyboard, Navigation } from 'swiper/modules';
import AOS from 'aos';

function Services() {
  const [slidesIsEnd , setSlidesIsEnd] = useState(false)
  const [slidesIsBeginning , setSlidesIsBeginning] = useState(true)
  const sliderRef = useRef(null)
  
  useEffect(()=>{
    AOS.init();
  },[])

  const handlePrevieusSlide= ()=>{
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }
  const handleNextSlide= ()=>{
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }

  return (
    <div id='services-page' 
    className='services-component component-page'
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      {/* animate__animated animate__flipInY */}
      <div className='content-title'>
        <h1><span className='icon-inline'><ion-icon name="code-slash-outline">
          </ion-icon></span>What i <span className='text-color'>do.</span>         
        </h1>
      </div>

        <Swiper 
          className='services-container'
          grabCursor={true}       
          freeMode={true}   
          pagination={{dynamicBullets:true, clickable:true}}   
          keyboard={{
            enabled:true
          }}
          breakpoints={{
            400:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}

          ref={sliderRef}
          modules={[FreeMode,Pagination,Keyboard,Navigation]}
          onSlideChange={(slide)=>{
            //console.log('slide changed' , slide.activeIndex , slide)
            if(slide.isEnd){
              setSlidesIsBeginning(false)
              setSlidesIsEnd(true)
            } 
            if(slide.isBeginning) {
              setSlidesIsBeginning(true)
              setSlidesIsEnd(false)
            }
            if(slide.isBeginning==false && slide.isEnd==false) {
              setSlidesIsBeginning(false)
              setSlidesIsEnd(false)
            }
          }}     
        >       
        {
          services.map((service , index) => {
            return (
              <SwiperSlide className='service-card' key={`service_${index}`}> 
                {
                  service.name == 'Landing Page' &&
                  <div className='icon-class-div'>
                    <ion-icon name="newspaper-outline"></ion-icon>
                  </div>
                }
                {
                  service.name == 'Frondend services' &&
                  <div className='icon-class-div'>
                    <ion-icon name="desktop-outline"></ion-icon>
                  </div>
                }
                {
                  service.name == 'Build Rest Api' &&
                  <div className='icon-class-div'>
                    <ion-icon name="server-outline"></ion-icon>
                  </div>
                }
                {
                  service.name == 'Real Time App' &&
                  <div className='icon-class-div'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </div>
                }
                {
                  service.name == 'Authontication' &&
                  <div className='icon-class-div'>
                    <ion-icon name="key-outline"></ion-icon>
                  </div>
                }
                {
                  service.name == 'CRUD operations' &&
                  <div className='icon-class-div'>
                    <ion-icon name="options-outline"></ion-icon>
                  </div>
                }
                {
                  service.name == 'Programing problems solving' &&
                  <div className='icon-class-div'>
                    <ion-icon name="extension-puzzle-outline"></ion-icon>
                  </div>
                }

                <div className='service-content'>
                  <h4 className='service-name'>{service.name}</h4>
                  <p className='service-description'>{service.description}</p>
                </div>                        
              </SwiperSlide>
            )
          })
        }      
        </Swiper> 

      <div className='slides-controllers'>      
        <button onClick={handlePrevieusSlide} disabled={slidesIsBeginning}
        className='slide-to-prev btn-nav-slide'>
          <i className='bx bx-chevron-left'></i>
        </button>
        
        <button onClick={handleNextSlide} disabled={slidesIsEnd}
        className='slide-to-next btn-nav-slide'>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>     
    </div>
  )
}

export default Services