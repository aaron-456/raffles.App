import React, { useRef } from 'react';
import './styles/modalReference.css'
import { useBoolean } from "../../context/MiContextoProvider";

const ModalReference = () => {

    const { setBoolean }=useBoolean()

    const inputRef = useRef();
    const handlePaste = () => {
        const clipboardData = navigator.clipboard.readText();
        clipboardData.then((text) => {
            inputRef.current.value = text;
        });
    };
    return (
        <div className="modal fade modal_" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content body_modal">
                    <div className='blue_modal'>
                        <b>ingrese el numero de transaccion</b>
                        <div className='content_form_reference'>
                            <div style={{position:"relative"}}>
                                <input ref={inputRef} />
                                <button onClick={handlePaste}>Pegar</button>
                            </div>
                        </div>
                        <br />
                        <button  data-bs-dismiss="modal" onClick={()=>{setBoolean(true)}} className='btn_verifi'><strong>Verificar</strong></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalReference
