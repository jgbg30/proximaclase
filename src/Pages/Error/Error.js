import React from 'react'
import './Error.css'
import contacto from './img/carrousel-1.jpg'

const Error = () => {
  return (
    <div className="container">
        <img className="imagenCont" src={contacto} width="200px" height="200px" alt="cont" />
 
        <h1>Error 404 (Page Not Found) Página no encontrada</h1>
        
        </div>
  )
}

export default Error