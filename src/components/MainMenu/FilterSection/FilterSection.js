import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Label, Collapse } from "reactstrap";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);
  return (
    <div>
      <Card>
        <Label onClick={toggle}>Toggle</Label>
        <Collapse isOpen={isOpen}>
          <Form>
            <FormGroup check>
              <Input className="mb-3" type="select">
                <option>Default Select</option>
                <option>asdsafd Select</option>
                <option>Defasdfdsfault Select</option>
              </Input>
            </FormGroup>
          </Form>
        </Collapse>
        <Label onClick={toggle1}>Toggle</Label>
        <Collapse isOpen={isOpen1}>
          <Form>
            <FormGroup check>
              <Input className="mb-3" type="select">
                <option>Default Select</option>
                <option>asdsafd Select</option>
                <option>Defasdfdsfault Select</option>
              </Input>
            </FormGroup>
          </Form>
        </Collapse>
      </Card>
    </div>
  );
};

export default FilterSection;
