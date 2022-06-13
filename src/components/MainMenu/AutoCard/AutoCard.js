import React from "react";
import { Card, CardBody, CardText, Button } from "reactstrap";
import "./AutoCard.css"

const AutoCard = (props) => {
  return (
    <div>
      <Card className="AutoCard__Card">
        <CardBody className="AutoCard__CardBody">
          <p>{props.model}</p>
          <p>{props.description}</p>
          <p>{props.year}</p>
          <p>{props.kilometer}</p>
          <p>{props.color}</p>
          <p>{props.price}</p>
          <p>{props.date}</p>
          <p>{props.place}</p>
          <Button className="AutoCard__Button">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AutoCard;

