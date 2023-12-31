import React, { useEffect, useState } from 'react'
import './styles/reference_section.css'
import goodluck from '../assets/goodluck.png';
import iconWasapp from '../assets/icons8-whatsapp.svg'
import { useBoolean } from '../context/MiContextoProvider';


type UserData = {
  id: number;
  name: string;
  lastname: string;
  country: string;
  city: string | null;
  address: string | null;
  phone: string;
  numbersR: string | null;
  email: string;
  reference: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
};


const Reference_section = () => {
  const { isReference } = useBoolean()

  const [data, setData] = useState<UserData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/api/get/?reference=${isReference}`);

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData)
        } else {
          console.error('Error en la solicitud GET:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };

    // Llamar a la función para realizar la solicitud cuando el componente se monta
    fetchData();
  }, [isReference]); // El segundo parámetro del useEffect es un array de dependencias, en este caso, está vacío para que se ejecute solo una vez al montar el componente


  return (
    <div className='body_reference_section'>
      <strong>ENHORABUENA!!</strong>
      <p>A continuacion los <strong>Numeros</strong> con los cuales vas a <strong>PARTICIPAR</strong></p>
      {
        data?.length === 0 &&
        <div className='cube_'>
          <strong>No se aprobo la transaccion</strong>
          <p>si tiene alguna duda </p>
          <p>pongase en contacto con nosotros</p>
        </div>
      }

{
        data?.length === 1 &&
          <div className='cube_2'>
            <strong style={{fontSize:"1.3rem"}}>Transacción ya creada, sus numeros</strong>
            <strong  style={{fontSize:"1.3rem"}}>son:</strong>
            <strong style={{fontSize:"1.5rem"}}>{data[0].numbersR}</strong>
            <p>si tiene alguna duda </p>
            <p>pongase en contacto con nosotros</p>
          </div>
      }

      <img className='img_go' src={goodluck} alt="" />

      <div className='cont_1'>
        <button className='btn1'><img src={`${iconWasapp}`} alt="" />+INFORMACION</button>
        <button className='btn2'><img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />SIGUENOS</button>
      </div>
    </div>
  )
}

export default Reference_section
