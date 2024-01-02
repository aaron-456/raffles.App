import React, { useState, useEffect } from "react";
import "./styles/shoppingCart_Section.css";
import ModalForm from "./modales/ModalForm";

const ShoppingCart_Section = () => {
  const [numberCount, setNumberCount] = useState(2);
  const [valueToPay, setValueToPay] = useState(30000);
  const [visibleModal, setVisibleModal] = useState(false);

  //Funciones para el modal de el formulario

  const handeleOpenModal = () => {
    setVisibleModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {

    setVisibleModal(false);
    document.body.style.overflow = "auto";
    
  };

  //

  const handleIncrement = () => {
    setNumberCount(numberCount + 1);
    setValueToPay(valueToPay + 15000);
  };

  const handleDecrement = () => {
    if (numberCount > 2) {
      setNumberCount(numberCount - 1);
      setValueToPay(valueToPay - 15000);
    }
  };

  const customValueToPay = valueToPay
    .toLocaleString("es-CO")
    .replace(/\./g, ",");

  return (
    <section className="shoppingCart__section">
      
      <div className="alertMessage__box">
        <span className="alert__span">¡ QUE ESPERAS PARA PARTICIAPAR !</span>
      </div>

      <div className="counter-and-value__box">
        <div className="counter__box">
          <p className="titleCv">Nº OPORTUNIDADES</p>

          <div className="counter">
            <button className="decrement__button" onClick={handleDecrement}>
              <i className="bx bx-chevron-left"></i>
            </button>
            <p className="counter__value">{numberCount}</p>
            <button className="increment__button" onClick={handleIncrement}>
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="valueToPay__box">
          <p className="titleCv">VALOR A PAGAR $</p>
          <div className="value">
            <span className="value__span">{`$ ${customValueToPay} COP`}</span>
          </div>
        </div>
      </div>

      <div className="buyRaffle__box">
        <button onClick={handeleOpenModal} className="buyRaffle__btn">
          <span className="buy__span">COMPRAR</span>
          <i className="bx bx-cart-add"></i>
        </button>
        {visibleModal && (
            <ModalForm onClose={handleCloseModal} />
          )}
      </div>


      <div className="hr__box">
        <hr className="hr" />
        <span className="numberZero">0</span>
        <hr className="hr" />
      </div>
    </section>
  );
};

export default ShoppingCart_Section;
