import React, { useState } from "react";
import { Card,Form, FormGroup, Label, Input} from "reactstrap";
import "./CategorySection.css"

const CategorySection = ({ searchBrand, setSearchBrand }) => {
  return (
    <div className="CategorySection__page">
      <Card>
      <Label for="exampleSelect" >
        Otomobil
      </Label>
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
      </Card>
    </div>
  );
};

export default CategorySection;
