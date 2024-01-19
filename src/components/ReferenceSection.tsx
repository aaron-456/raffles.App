import React, { useEffect, useState } from "react";
import "./styles/reference_section.css";
import goodluck from "../assets/goodluck.png";
import iconWasapp from "../assets/icons8-whatsapp.svg";
import { useBoolean } from "../context/MiContextoProvider";

const Reference_section = () => {
  const { isReference, setBoolean } = useBoolean();
  const [visibleModal, setVisibleModal] = useState(true);

  type DataRaffle = {
    numbersR: number[] | null;
  };

  const [data, setData] = useState<DataRaffle | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://525e-2600-1f18-47b6-4700-11e3-42b3-da93-e5a1.ngrok-free.app/get/?transaction_id=${isReference}`
        );

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Error when obtaining raffle numbers", response.status);
        }
      } catch (error) {
        console.error("GET request failed", error);
      }
    };

    fetchData();
  }, [isReference]);

  const handleCloseModal = () => {
    setVisibleModal(false);
    setBoolean(false);
  };

  return visibleModal ? (
    <div className="body_reference_section">
      <div className="modal_container">
        <div className="close-form-box btn-arrow" onClick={handleCloseModal}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>
      </div>
      <span className="highlight_text">ENHORABUENA!!</span>
      <p className="introduction_text">
        A continuacion los <strong>Numeros</strong> con los cuales vas a{" "}
        <strong>PARTICIPAR</strong>
      </p>
      {data ? (
        <div className="cube_2">
          {data.numbersR?.map((number) => (
            <span
              key={number}
              className="numbers_raffle"
              style={{ fontSize: "1.5rem" }}
            >
              {number} ,
            </span>
          ))}
        </div>
      ) : (
        <div className="cube_">
          <strong>No se aprobo la transaccion</strong>
          <p>si tiene alguna duda </p>
          <p>pongase en contacto con nosotros</p>
        </div>
      )}

      <img className="img_elf" src={goodluck} alt="img not found" />

      <div className="cont_1">
        <button className="btn1">
          <img src={`${iconWasapp}`} alt="img not found" />
          +INFORMACION
        </button>
        <button className="btn2">
          <img
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
          SIGUENOS
        </button>
      </div>
    </div>
  ) : null;
};

export default Reference_section;
