import React, { useEffect, useState } from "react";
import "./styles/porcentajeBar.css";

type ProgresData = {
  status: string;
  created_at: string;
  updated_at: string;
};

const PercentageBar = () => {
  const [data, setData] = useState<ProgresData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://525e-2600-1f18-47b6-4700-11e3-42b3-da93-e5a1.ngrok-free.app/api/progressbar/1`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        } else {
          console.error("Error en la solicitud GET:", response.status);
        }
      } catch (error) {
        console.error(`Error en la solicitud GET: ${error.message}`);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="percentageBar__app">
      <div className="content_var" style={{ width: `${data?.status}%` }}></div>
      <span className="percentage__number">{data?.status}%</span>
    </div>
  );
};

export default PercentageBar;
