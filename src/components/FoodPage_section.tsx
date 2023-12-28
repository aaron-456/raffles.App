import React from 'react'
import './styles/foodPage_section.css'
import iconWasapp from '../assets/icons8-whatsapp.svg'
import ModalReference from './modales/ModalReference'

const FoodPage_section = () => {
    return (
        <div>
            <div className='foo_page'>
                <div className='cont_1'>
                    <button className='btn1'><img src={`${iconWasapp}`} alt="" />+INFORMACION</button>
                    <button className='btn2'><img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />SIGUENOS</button>
                </div>
                <div>
                    <button className='btn3' data-bs-toggle="modal" data-bs-target="#exampleModal"><b>verificar transaccion</b></button>
                </div>
            </div>
            <ModalReference />
        </div>

    )
}

export default FoodPage_section
