import React from "react";

const PaymentForm = () => {
  return (
    <>
      <script
        src="https://donorbox.org/widget.js"
        paypalexpress="false"
      ></script>
      <iframe
        title="Dr. Ruben Donations Box"
        src="https://donorbox.org/embed/dr-ruben-rajakumar-candidate-for-saskatoon-west"
        name="donorbox"
        allowpaymentrequest=""
        seamless="seamless"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        style={{}}
      ></iframe>
    </>
  );
};

export default PaymentForm;
