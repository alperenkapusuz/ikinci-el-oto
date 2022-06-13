import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Collapse } from "reactstrap";

const CategorySection = ({ searchBrand, setSearchBrand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Label for="exampleSelect" onClick={toggle}>
        Otomobil
      </Label>
      <Collapse isOpen={isOpen}>
        <Form>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
            >
              <option>toyota</option>
              <option>audi</option>
              <option>mercedes</option>
            </Input>
          </FormGroup>
        </Form>
      </Collapse>
    </div>
  );
};

export default CategorySection;
