import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import './css/container.css'
import './css/main.css'
import './css/sidenav.css'
import './css/about.css'
import './css/projects.css'
import './css/services.css'
import './css/contact.css'
import './css/skills.css'

// import './css/swiperStyles/testSwiper2.css'

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import 'swiper/css/grid';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
// import 'swiper/css/effect-flip';
// import 'swiper/css/effect-cube';

import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


