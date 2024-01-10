import React, { useEffect, useState } from "react";
import "./styles/reference_section.css";
import goodluck from "../assets/goodluck.png";
import iconWasapp from "../assets/icons8-whatsapp.svg";
import { useBoolean } from "../context/MiContextoProvider";

const Reference_section = () => {
  const { isReference } = useBoolean();

  type DataRaffle = {
    numbersR: number[] | null;
  };

  const [data, setData] = useState<DataRaffle | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:80/api/get/?transaction_id=${isReference}`
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

  return (
    <div className="body_reference_section">
      <strong>ENHORABUENA!!</strong>
      <p>
        A continuacion los <strong>Numeros</strong> con los cuales vas a{" "}
        <strong>PARTICIPAR</strong>
      </p>
      {data ? (
        <div className="cube_2">
          {data.numbersR?.map((number) => (
            <span>
              <span
                key={number}
                className="numbers_raffle"
                style={{ fontSize: "1.5rem" }}
              >
                {number} ,
              </span>
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

      <img className="img_go" src={goodluck} alt="img not found" />

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
  );
};

export default Reference_section;
