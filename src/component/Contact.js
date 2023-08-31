import React, { useRef, useState } from 'react'

function Contact() {
  const senderName = useRef('')
  const senderEmail = useRef('')
  const senderMessage = useRef('')
  const [messageSended , setMessageSended] = useState(false)

  const handleSubmitForm = (e)=>{
    e.preventDefault()

    console.log(senderMessage.current.value);
    if(senderName.current.value =='' || senderMessage.current.value =='' 
    || senderEmail.current.value =='')return

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxiPNtPLuNIDMsIuerYJ9_PU8OXUAO9TqPfyavopTB4Vv8P09P4Op1-guxSJhm1_ael/exec'
    const form = document.forms['submit-to-google-sheet']
    
    console.log(e.target);
    console.log(new FormData(e.target));
    const senderData = {
      Name:senderName.current.value,
      Email:senderEmail.current.value,
      Message:senderMessage.current.value
    }

    setMessageSended(true)
    fetch(scriptURL, { method: 'POST', body:new FormData(form)})
    .then(response =>{
      senderName.current.value=''
      senderEmail.current.value=''
      senderMessage.current.value=''
    })
    .catch(error => console.error('Error!', error.message))
  }

  return (
    <div id='contact-page' className='contact-component component-page animate__animated animate__fadeIn'>
      <div className='contact-content'>
        <h1 className='contact-content-title animate__animated animate__flipInX'>Get in <span>touch</span></h1>

        <div className='contact-content-call-info'>
          <div className=''>
            <p className='call-info-paragraph'><span className='icon-span'>
              <i className='bx bxl-gmail'></i>
            </span>muhamedemadeldeen00@gmail.com</p>
            <p className='call-info-paragraph'><span className='icon-span'>
              <i className='bx bx-phone'>
              </i></span>+2001559588923</p>
            <p className='call-info-paragraph'><span className='icon-span'>
              <i className='bx bxl-whatsapp'></i></span>+2001559588923</p>
          </div>

          <div className='socials-icons'>
            <a href='#' className='linkedin-icon'><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href='#' className='github-icon'><ion-icon name="logo-github"></ion-icon></a>         
          </div>
        </div>

        <button className='btn btn-download'>Donwnload CV
        <i className='bx bxs-download'></i></button>     
      </div>

      {
        !messageSended ?
        <form name="submit-to-google-sheet" onSubmit={handleSubmitForm} 
        className='contact-controllers'>
          <article className='form-article'>
            <label className='form-label'>Name</label>
            <input type='text' ref={senderName} name='Name' 
            className='input-text' placeholder='your name'/>
          </article>
          
          <article className='form-article'>
            <label className='form-label'>Email</label>
            <input type='email' ref={senderEmail} name='Email' 
            className='input-text' placeholder='your email'/>
          </article>
          
          <article className='form-article'>
            <label className='form-label'>Message</label>
            <textarea ref={senderMessage} name='Message' 
            rows={5}  className='input-text' placeholder='your message'/>
          </article>
          
          <article className='form-article'>               
            <input type='submit' className='btn btn-download'/>
          </article>       
        </form>
      :
      <p className='call-info-paragraph'>
        <span className='icon-span-happy'>
        <ion-icon name="happy-outline"></ion-icon></span>
        message sended successfully 
      </p>
      }
      
    </div>
  )
}

export default Contact