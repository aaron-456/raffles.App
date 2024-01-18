import React, { useState } from "react";
import "../styles/modalForm.css";
import ModalWompi from "./ModalWompi";

const ModalForm = ({ onClose, valueToPay, numberCount }) => {

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [uniqueReference, setUniqueReference] = useState("");
  const [hashIntegrity, setHashIntegrity] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    country: "COLOMBIA",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const errorMessages = {
    name: "Por favor, ingrese su nombre",
    lastname: "Por favor, ingrese su apellido",
    address: "Por favor, ingrese su dirección",
    city: "Por favor, ingrese su ciudad",
    phone: "Por favor, ingrese su número de teléfono",
    email: "Por favor, ingrese su correo electrónico",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const priceCents = Number(valueToPay) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar valores vacíos y actualizar errores
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = errorMessages[key];
      }
    });

    if (Object.keys(newErrors).length > 0) {
      // Si hay errores, actualizar el estado y devolver
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://44.211.214.175:8000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: priceCents,
          number_raffle:numberCount
        }),
      });

      if (response.ok) {
        console.log("The data has been sent successfully");
        const data = await response.json();
        const reference = data.cliente.reference;
        const integrityHash = data.hash_integrity;
        setUniqueReference(reference);
        setHashIntegrity(integrityHash);
        console.log(reference);
        console.log(integrityHash);

        handleOpenSuccessModal();
        console.log("Los datos se enviaron correctamente");
      } else {
        console.log("Error al enviar los datos");
      }
    } catch (error) {
      console.log("Error al enviar la solicitud");
    }
  };

  const handleOpenSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
      setShowSuccessModal(false)
  };

  return (
    <div className="modal-form-container">
      <div className="modal-form-box" onClick={handleCloseModal}>
        <div className="close-form-box" onClick={onClose}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>

        <div className="form-text">
          <h4 className="form-text-one">!ESTAS A UN PASO DE PARTICIPAR!🤑🔥</h4>
          <h4 className="form-text-two">Diligencia este formulario🚖🔥</h4>
        </div>

        <form action="/submit" className="user-form">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.name}</span>

          <label htmlFor="lastname">Apellido *</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.lastname}</span>

          <label htmlFor="country">Pais *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            readOnly
          />

          <label htmlFor="address">Direccion *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.address}</span>

          <label htmlFor="city">Ciudad *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.city}</span>

          <label htmlFor="phone">Telefono *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.phone}</span>

          <label htmlFor="email">Correo Electronico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.email}</span>
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
                <span>{numberCount}</span>
              </div>
              <p>{valueToPay}</p>
            </div>
            <hr className="purcharse-hr" />
            <div className="purchase-detail-item">
              <p>Subtotal</p>
              <p>{valueToPay}</p>
            </div>
            <hr className="purcharse-hr" />
            <div className="purchase-detail-item">
              <p>Total</p>
              <p>{valueToPay}</p>
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
            <button className="payment-button" onClick={handleSubmit}>
              <p className="payment-text-button">Realizar Pago</p>
              <p className="opportunity-text">
                no te pierdas de esta oportunidad
              </p>
            </button>
          </div>

          {showSuccessModal && (
            <div className="da">
              <ModalWompi
                uniqueReference={uniqueReference}
                hashIntegrity={hashIntegrity}
                priceCents={priceCents}
              />
            </div>

          )}
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
