import React from "react";
import "./styles/generalInformation_Section.css";

const GeneralInformation_Section = () => {
  return (
    <section className="generalInformation__section">
      <h2 className="title_information">
        ¿Preparado para participar por esta espectacular CAMIONETA Y 3
        ANTICIPADOS de $2.000.000 c/u?
      </h2>
      <div className="awardSpan__box">
        <span className="awards__span">30 DICIEMBRE - $2.000.000</span>
        <span className="awards__span">20 ENERO - $2.000.000</span>
        <span className="awards__span">10 FEBRERO - $2.000.000</span>
      </div>

      <div className="moreInfo__box">
        <p className="text_moreInfo texOne">VALOR DE CADA NUMERO $15000 COP</p>
        <p className="text_moreInfo textTwo">
          Para poder participar debes adquirir MINIMO 2 boletas
        </p>
        <p className="text_moreInfo textThree">
          El SORTEO SE REALIZARA CON LA LOTERIA DE BOYACA, CON EL # DEL PREMIO
          MAYOR
        </p>
        <p className="text_moreInfo textFour">
          El dia 24 de FEBRERO SE CONOCERA EL AFORTUNAD@ DE ESTRENAR ESTA
          GRANDIOSA MAQUINA!
        </p>
      </div>
      <div className="hr__box">
        <hr className="hr" />
        <span className="numberZero">0</span>
        <hr className="hr" />
      </div>
    </section>
  );
};

export default GeneralInformation_Section;
