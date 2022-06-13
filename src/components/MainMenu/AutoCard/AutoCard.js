import React from "react";
import { Card, CardBody, CardText, Button } from "reactstrap";

const AutoCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardText>{props.model}</CardText>
          <CardText>{props.description}</CardText>
          <CardText>{props.year}</CardText>
          <CardText>{props.kilometer}</CardText>
          <CardText>{props.color}</CardText>
          <CardText>{props.price}</CardText>
          <CardText>{props.date}</CardText>
          <CardText>{props.place}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AutoCard;

/*
    id: "a1",
    brand: "toyota",
    model: "sadfdsa",
    description: "fdsaf",
    year: "sadfds",
    kilometer: "fsadfa",
    color: "sdafas",
    price: "sdafsa",
    date: "fsdaf",
    place: "fsdaf",
    imageURL: [
      "https://fiyatlisteleri.opel.com.tr/Assets/img/corsa_1.png",
      "https://fiyatlisteleri.opel.com.tr/Assets/img/corsa_1.png",
      "https://fiyatlisteleri.opel.com.tr/Assets/img/corsa_1.png",
    ],
*/
