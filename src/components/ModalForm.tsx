import React from "react";
import "./styles/modalForm.css";

const ModalForm = ({ onClose }) => {
  return (
    <div className="modal-form-container">
      <div className="modal-form-box">
        <div className="close-form-box" onClick={onClose}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>

        <div className="form-text">
          <h4 className="form-text-one">!ESTAS A UN PASO DE PARTICIPAR!🤑🔥</h4>
          <h4 className="form-text-two">Diligencia este formulario🚖🔥</h4>
        </div>

        <form action="/submit" className="user-form">
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

        <div className="purchase-detail-box">
          <div className="purchase-detail-text-box">
            <h4 className="purchase-detail-text">DETALLE DE TU COMPRA </h4>
            <span className="purcharse-detail-text-span">$ $</span>
          </div>

          <hr className="purcharse-hr" />
          <div className="purchase-detail-item">
            <p>Poducto</p>
            <p>Subtotal</p>
          </div>
          <hr className="purcharse-hr" />
          <div className="purchase-detail-item">
            <div className="purchase-tickets">
              <p>Ticket Mazda CX-5</p>
              <span>x2</span>
            </div>
            <p>$30,000</p>
          </div>
          <hr className="purcharse-hr" />
          <div className="purchase-detail-item">
            <p>Subtotal</p>
            <p>$30,000</p>
          </div>
          <hr className="purcharse-hr" />
          <div className="purchase-detail-item">
            <p>Total</p>
            <p>$30,000</p>
          </div>
        </div>

        <div className="wompi-box">
          <div className="wompi-cont-box">
            <img src="/Wompi_LogoPrincipal.jpg" alt="image not found" />
            <img src="/banner-wompi.jpg" alt="image not found" />
          </div>
          <p className="wompi-text">Paga a travex de Wompi</p>
        </div>
        <div className="payment-button-box">
          <button className="payment-button">
            <p className="payment-text-button">Realizar Pago</p>
            <p className="opportunity-text">
              no te pierdas de esta oportunidad
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
