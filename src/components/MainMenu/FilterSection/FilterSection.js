import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Label, Collapse } from "reactstrap";

const FilterSection = ({
  searchPrice,
  setSearchPrice,
  searchPlace,
  setSearchPlace,
  searchYear,
  setSearchYear,
  searchColor,
  setSearchColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggle3 = () => setIsOpen3(!isOpen3);
  return (
    <div>
      <Card>
        <Label onClick={toggle}>Price</Label>
        <Collapse isOpen={isOpen}>
          <Form>
            <FormGroup check>
              <Input
                className="mb-3"
                type="text"
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Collapse>
        <Form>
          <Label>Address</Label>
          <FormGroup check>
            <Input
              className="mb-3"
              type="text"
              value={searchPlace}
              onChange={(e) => setSearchPlace(e.target.value)}
            />
          </FormGroup>
        </Form>
        <Label onClick={toggle2}>Year</Label>
        <Collapse isOpen={isOpen2}>
          <Form>
            <FormGroup check>
              <Input
                className="mb-3"
                type="text"
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Collapse>
        <Label onClick={toggle3}>Color</Label>
        <Collapse isOpen={isOpen3}>
          <Form>
            <FormGroup check>
              <Input
                className="mb-3"
                type="select"
                value={searchColor}
                onChange={(e) => setSearchColor(e.target.value)}
              >
                <option>red</option>
                <option>blue</option>
                <option>green</option>
              </Input>
            </FormGroup>
          </Form>
        </Collapse>
      </Card>
    </div>
  );
};

export default FilterSection;
