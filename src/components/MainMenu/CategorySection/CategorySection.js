import React from "react";
import {
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import "./CategorySection.css";

const CategorySection = ({ searchBrand, setSearchBrand }) => {
  const autos = [
    { display: "Toyota", value: "toyota" },
    { display: "Audi", value: "audi" },
    { display: "Mercedes", value: "mercedes" },
  ];
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
                {values.display} <Badge pill>14</Badge>
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default CategorySection;
