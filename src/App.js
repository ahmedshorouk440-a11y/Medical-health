
import { Fragment } from 'react';
import './App.css';

import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout/Layout';
import Contact from './Pages/Contact';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     
    <Route index   element={<Home/>} />
    <Route path='contact'  element={<Contact/>} />

    
  </Route>
))


function App() {
  return (
   <Fragment>

    <RouterProvider router={routes}>


    </RouterProvider>
   </Fragment>
  );
}

export default App;
