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
                              <option>altın</option>
              <option>bej</option>
              <option>beyaz</option>
              <option>bordo</option>
              <option>füme</option>
              <option>gri</option>
              <option>gri(gümüş)</option>
              <option>gri(metalik)</option>
              <option>gri(itanium)</option>
              <option>kahverengi</option>
              <option>kırmızı</option>
              <option>lacivert</option>
              <option>mavi</option>
              <option>mavi(metalik)</option>
              <option>mor</option>
              <option>pembe</option>
              <option>şampanya</option>
              <option>sarı</option>
              <option>siyah</option>
              <option>turkuaz</option>
              <option>green</option>
              <option>turuncu</option>
              <option>yeşil</option>
              <option>yeşil(metalik)</option>
              <option>diğer</option>
              </Input>
            </FormGroup>
          </Form>
        </Collapse>
      </Card>
    </div>
  );
};

export default FilterSection;
