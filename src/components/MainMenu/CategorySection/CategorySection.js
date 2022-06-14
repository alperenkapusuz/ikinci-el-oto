import React, { useEffect, useState } from "react";
import { Card, Label, ListGroup, ListGroupItem, Badge } from "reactstrap";
import "./CategorySection.css";

const CategorySection = ({ searchBrand, setSearchBrand, props }) => {
  const [toyotaBadge, setToyotaBadge] = useState("");
  const autos = [
    { display: "Toyota", value: "toyota", badge:toyotaBadge },
    { display: "Audi", value: "audi" , badge:"0"},
    { display: "Mercedes", value: "mercedes", badge:"1" },
  ];
  useEffect(() => {
    var sum = props.map((auto) => auto.brand);
    console.log(sum);
    let toyota = 0
    for(let i=0 ; i<sum.length; i++){
      
      if(sum[i] === "toyota"){
        toyota++
      }
      
      console.log(toyota)
      setToyotaBadge(toyota)
    }
    
  },[])


  return (
    <div className="CategorySection__page">
      <Card>
        <Label for="exampleSelect">Otomobil</Label>
        <ListGroup>
          {autos.map((values) => (
            <div>
              <ListGroupItem
                value={searchBrand}
                onClick={(e) => setSearchBrand(values.value)}
                className="justify-content-between"
              >
                {values.display} <Badge pill>{values.badge}</Badge>
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default CategorySection;
