import React from "react";

const ModalWompi = () => {
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
        data-amount-in-cents="4950000"
        data-reference="4XMPGKWWPKWQ"
        data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
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
