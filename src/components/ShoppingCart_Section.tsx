import React, { useState } from "react";
import "./styles/shoppingCart_Section.css";

const ShoppingCart_Section = () => {
  const [numberCount, setNumberCount] = useState(2);

  const handleIncrement = () => {
    setNumberCount(numberCount + 1);
  };

  const handleDecrement = () => {
    if (numberCount > 2) {
      setNumberCount(numberCount - 1);
    }
  };

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
            <span className="value__span">$60,000 COP</span>
          </div>
        </div>
      </div>

      <div className="buyRaffle__box">
        <button className="buyRaffle__btn">
          <span className="buy__span">COMPRAR</span>
          <i className="bx bx-cart-add"></i>
        </button>
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
