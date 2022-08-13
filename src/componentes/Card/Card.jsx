import React from 'react'
import Card from "react-bootstrap/Card";

const Cards = (Props) => {
  return (
    
    <Card className="card my-2 p-2 text-center">     
      <img src={Props.img} className="card-img-top pb-0 p-4" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{Props.name}</h5>
      <div className="mx-2">
      <hr className="solid" /></div>
      <p className="card-text"><span className="mb-2 ">{Props.descripcion}</span></p>
      </div>             
    </Card>

  );
}


export default Cards