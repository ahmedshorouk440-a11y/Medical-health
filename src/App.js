
import { Fragment } from 'react';
import './App.css';
 import Login from './Pages/Login'
import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout/Layout';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import PageTransition from './componets/Page';
import Services from './Pages/services';
import OurTeam from './Pages/OurTeam';
import FaqPage from './Pages/Faq';
import Blogcont from './Pages/bolgcont';
import Blog from './Pages/blog';
import Blogcont2 from './Pages/bolgcont2';
import Research from './Pages/searchcont';
import Info from './Pages/Info';
import Booking from './Pages/booking';




const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     
    <Route index   element={<Home/>} />
          <Route path='aboutus'  element={<Aboutus/>} />
          <Route path='faqs'  element={<FaqPage/>} />
           <Route path='contact'  element={<Contact/>} />
            <Route path='services'  element={<Services/>} />
             <Route path='ourteam'  element={<OurTeam/>} />
              
                      <Route path='login'  element={<Login/>} />
                                            <Route path='Booking'  element={<Booking/>} />
                       <Route path='research'  element={<Research/>} />
                       <Route path='blog'  element={<Blog/>} />
                       <Route path="blogcont" element={<Blogcont />} />
            <Route path="blogcont2" element={<Blogcont2 />} />
             <Route path='Info'  element={<Info/>} />


             
    
  </Route>
))


function App() {
  return (
      <PageTransition>
   <Fragment>
    

    <RouterProvider router={routes}>
      </RouterProvider>
     


    
   </Fragment>
   </PageTransition>

   
  );
}

export default App;
