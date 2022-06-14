import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import "./AutoCard.css"

const AutoCard = (props) => {
  return (
    <div>
      <Card className="AutoCard__Card">
        <CardBody className="AutoCard__CardBody">
          <div>{props.model}</div>
          <div>{props.description}</div>
          <div>{props.year}</div>
          <div>{props.kilometer}</div>
          <div>{props.color}</div>
          <div>{props.price}</div>
          <div>{props.date}</div>
          <div>{props.place}</div>
          <Button className="AutoCard__Button">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AutoCard;

