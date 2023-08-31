
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Container from './component/Container';

//components
import Main from './component/Main';
import About from './component/About';
import Services from './component/Services';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Skills from './component/Skills';
import RedirectedPage from './RedirectedPage';
// import TestSwiper from './TestSwiper';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/test-swiper' element={<TestSwiper />}/> */}
      <Route path='/' element={<RedirectedPage />}/>
      <Route path='/my-portfolio' element={<Container />}>
        <Route path='main' element={<Main />}/>
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />}/>
        <Route path='services' element={<Services />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='contact' element={<Contact />}/>
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
