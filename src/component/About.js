import React from 'react'
import { EffectCreative,Autoplay, Pagination,Keyboard , Navigation} from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';
import certifications from '../data/certifications'
import university_logo from '../images/personal/alex_logo.png';

function About() {
  return (
    <div id='about-page' className='about-component component-page'>   
      <div className='about-info'>
        <section className='about-info-section education-section animate__animated animate__rotateInDownLeft'>
          <div className='content-title margin-bottom animate__animated animate__flipInY'>
            <h2 className='title-section'>
              <span className='icon-title-section'>
                <ion-icon name="school-outline"></ion-icon>             
              </span>     
              Education
            </h2>
          </div>         
          
          <ul className='section-content education-info'>
            <li>
              <h4>Bachelor degree 
              <span className='opacity-low margin-left'>2020-2024</span></h4>
              
              <div className='education-info-details'>
                <img src={university_logo} className='skill-logo' alt='university-image'/>

                <div>
                  <p className='paragraph-education'>Alexandria University.</p>                          
                  <p className='paragraph-education'>Faculty of Commerce.</p>
                  <p className='paragraph-education'>Department : 
                    <span className='paragraph-education-bold'>MIS</span></p>
                  <p className='paragraph-education'>
                    <span className='paragraph-education-bold'>
                    Management Information System</span></p>                  
                </div>           
              </div>     
            </li>                  
          </ul>                 
        </section>

        <section className='about-info-section boxes-section'>
          <div className='box-info'>
            <h3><i className='bx bxs-network-chart'></i></h3>
            <h5>Experience</h5>
            <p>1 + Year</p>
          </div>

          <div className='box-info'>
            <h3><i className='bx bxs-briefcase-alt-2'></i></h3>
            <h5>Compeleted</h5>
            <p>10 + Projects</p>
          </div>

          <div className='box-info'>
            <h3><i className='bx bx-headphone'></i></h3>
            <h5>Support</h5>
            <p>Online 24/7</p>
          </div>
        </section>

        <section className='about-info-section certifications-section animate__animated animate__rotateInDownRight'>
          <div className='content-title margin-bottom animate__animated animate__flipInY'>
            <h2 className='title-section'>
              <span className='icon-title-section'>
                <ion-icon name="trophy-outline"></ion-icon>             
              </span>     
              Certifications
            </h2>
          </div>

          <Swiper         
            effect={'creative'}
            grabCursor={true}
            navigation={true}
            keyboard={{enabled:true}}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            pagination={{clickable:true}}
            modules={[Autoplay,Keyboard,EffectCreative,Navigation, Pagination]}
            className="cerifications-swiper-container"
          >
            {
              certifications.map((certificate , i) =>{
                return(
                  <SwiperSlide className='certificate-card' key={`certificate-${i}`}>
                    <img src={certificate.img} alt='certificate_image'
                      className='certificate-image'/>
                    <div className='project-content'>
                      <h4>{certificate.name}</h4>
                      <a target='_blank' href={certificate.live} 
                      className='project-icon'>
                        <ion-icon name="earth"></ion-icon>
                      </a>
                    </div>
                  </SwiperSlide>
                )
              })
            }
            
          </Swiper>
        </section>   
      </div>
    </div>
  )
}

export default About

