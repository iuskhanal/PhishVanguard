import React from 'react'
import { NavLink } from 'react-router-dom'
import UseCase from './../UseCases/UseCase';

function Header() {
  return (
    <ul className="flex justify-center space-x-4 bg-gray-100 p-4 shadow-md"> 
      <NavLink to="/" className="text-blue-500 hover:text-blue-700">
        <li>Home</li>
      </NavLink>   
      
      <NavLink to="/about" className="text-blue-500 hover:text-blue-700">
        <li>About Us</li>
      </NavLink>

         <NavLink to="/usecase" className="text-blue-500 hover:text-blue-700">
        <li>UseCase</li>
      </NavLink>
         <NavLink to="/resource" className="text-blue-500 hover:text-blue-700">
        <li>Resources</li>
      </NavLink>

         <NavLink to="/download" className="text-blue-500 hover:text-blue-700">
        <li>Download</li>
      </NavLink>
    </ul>
  )
}

export default Header