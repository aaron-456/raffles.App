import React from "react";

const ModalWompi = ({ uniqueReference, hashIntegrity, priceCents }) => {

  const htmlContent = `
    <!-- Contenido de tu archivo HTML aquí -->
    <html>
      <head>
        <title>Mi Archivo HTML</title>
      </head>
      <body>
      <form>
      <script
        src="https://checkout.wompi.co/widget.js"
        data-render="button"
        data-public-key="pub_test_CoXa04ZrmZojWANJWnWd7szmY3zKOrz1"
        data-currency="COP"
        data-amount-in-cents="${priceCents}"
        data-reference="${uniqueReference}"
        data-signature:integrity="${hashIntegrity}"
      ></script>
    </form>
      </body>
    </html>
  `;
  return (
    <div className="success-modal">
      <iframe
        title="html-viewer"
        width="100%"
        height="600px"
        srcDoc={htmlContent}
      />
    </div>
  );
};

export default ModalWompi;
