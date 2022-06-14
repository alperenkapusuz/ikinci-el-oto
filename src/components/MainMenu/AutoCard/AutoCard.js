import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./AutoCard.css";

const AutoCard = (props) => {
  return (
    <div>
      <Link to={`/detay`}>
        <Card className="AutoCard__Card">
          <CardBody className="AutoCard__CardBody">
            <div style={{ width: "161px", marginLeft: "-16px" }}>
              <img
                className="AutoCard__img"
                src={props.imageURL[0]}
                alt="Card image cap"
              />
            </div>
            <div style={{ width: "160px" }}>{props.model}</div>
            <div style={{ width: "248.675px" }}>{props.description}</div>
            <div style={{ width: "42.25px" }}>{props.year}</div>
            <div style={{ width: "82.625px" }}>{props.kilometer}</div>
            <div style={{ width: "71px" }}>{props.color}</div>
            <div style={{ width: "84.0375px" }}>{props.price}</div>
            <div style={{ width: "71px" }}>{props.date}</div>
            <div style={{ width: "123px", marginRight: "-16px" }}>
              {props.place}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default AutoCard;
