import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/AboutUS/About.jsx';
import Home from './Components/Home/Home';
import Resources from './Components/Resources/Resources';
import UseCase from './Components/UseCases/UseCase';
import Download from './Components/Download/Download';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    {/* <Route index element={ <Home />}  /> */}
    <Route path='about' element={<About/>} />
    <Route path="resource" element={<Resources/>} />
    <Route path="usecase" element={<UseCase/>} />
    <Route path="download" element={<Download/>} />
    <Route path="*" element={<div>Not Found</div>} /> 
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
