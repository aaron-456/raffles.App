import React from "react";
import "./styles/modalForm.css";

const ModalForm = ({ onClose }) => {
  return (
    <div className="modalForm__container">
      <div className="modalForm__box">
        <div className="closeForm__box" onClick={onClose}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>

        <div className="text__form">
          <h4 className="textForm__one">!ESTAS A UN PASO DE PARTICIPAR!🤑🔥</h4>
          <h4 className="textForm__two">Diligencia este formulario🚖🔥</h4>
        </div>

        <form action="/submit">
          <label htmlFor="name">Nombre *</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="lastName">Apellido *</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="country">Pais *</label>
          <input type="text" id="country" name="country" />

          <label htmlFor="country">Direccion *</label>
          <input type="text" id="address" name="address" />

          <label htmlFor="city">Ciudad *</label>
          <input type="text" id="city" name="city" />

          <label htmlFor="phone">Telefono *</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="email">Correo Electronico *</label>
          <input type="email" id="email" name="email" />
        </form>

        <div className="purchaseDetail__box">
          <h4 className="text__purchaseDetail ">DETALLE DE TU COMPRA $ $</h4>
          <hr />
          <div>
            <p>Poducto</p>
            <p>Subtotal</p>
          </div>
          <div>
            <div>
              <p>Ticket Mazda CX-5 x 2</p>
              <span>X2</span>
            </div>
            <p>$30,000</p>
          </div>
          <div>
            <p>Subtotal</p>
            <p>$30,000</p>
          </div>
          <div>
            <p>Total</p>
            <p>$30,000</p>
          </div>
        </div>

        <div>
          <div>
            <img src="/Wompi_LogoPrincipal.jpg" alt="image not found" />
            <img src="/banner-wompi.jpg" alt="image not found" />
          </div>
          <p>paga a travex de Wompi</p>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
