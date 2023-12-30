import React from 'react'
import './styles/reference_section.css'
import goodluck from '../assets/goodluck.png';
import iconWasapp from '../assets/icons8-whatsapp.svg'

const Reference_section = () => {
  return (
    <div className='body_reference_section'>
      <strong>ENHORABUENA!!</strong>
      <p>A continuacion los <strong>Numeros</strong> con los cuales vas a <strong>PARTICIPAR</strong></p>
      <div className='cube_'>
        <strong>No se aprobo la transaccion</strong>
        <p>si tiene alguna duda </p>
        <p>pongase en contacto con nosotros</p>
      </div>
      <img className='img_go' src={goodluck} alt="" />

      <div className='cont_1'>
        <button className='btn1'><img src={`${iconWasapp}`} alt="" />+INFORMACION</button>
        <button className='btn2'><img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />SIGUENOS</button>
      </div>
    </div>
  )
}

export default Reference_section
