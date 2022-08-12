import React from 'react'
import Badge from "react-bootstrap/Badge";

const Footer = () => {
  return (
    <div className="p-2 text-center">
      <div className="mx-2"><hr className="solid" /></div>
      <h3>Derechos Reservados Juan Jose Contreras</h3>
      <h4><Badge bg="success"> @AGOSTO 2022</Badge></h4>
    </div>
  );
}

export default Footer