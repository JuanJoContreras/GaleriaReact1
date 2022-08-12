import React from 'react'
import Card from "react-bootstrap/Card";

var Cards = (Props) => {
  return (
    
    <Card className="my-2 p-2 text-center">
      <img src={Props.img} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{Props.name}</h5>
      <div className="mx-2"><hr className="solid" /></div>
      <p className="card-text"><i className="fas fa-map-marker-alt"></i><span className="mb-2 text-muted">{Props.descripcion}</span></p>
      </div>             
    </Card>

  );
}


export default Cards