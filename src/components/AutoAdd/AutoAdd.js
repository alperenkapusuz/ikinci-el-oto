import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import DUMMY_AUTO from "../../Data/Data";

const AutoAdd = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: Math.random().toString(),
    brand: "",
    model: "",
    description: "",
    year: "",
    kilometer: "",
    color: "",
    price: "",
    date: "",
    place: "",
    imageURL: [],
  });

  const saveItem = () => {
    if (
      form.brand === "" ||
      form.model === "" ||
      form.description === "" ||
      form.year === "" ||
      form.kilometer === "" ||
      form.color === "" ||
      form.price === "" ||
      form.date === "" ||
      form.place === "" ||
      form.imageURL.length === 0
    ) {
      alert("Tum alanlari doldurunuz");
      return;
    }

    data.push({
      ...form,
    });

    localStorage.setItem("data", JSON.stringify(data));

    setForm({
      brand: "",
      model: "",
      description: "",
      year: "",
      kilometer: "",
      color: "",
      price: "",
      date: "",
      place: "",
      imageURL: ["", "", ""],
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if (localData.length === 0) {
      localData.push(...DUMMY_AUTO);
      setData(localData);
    } else {
      setData(JSON.parse(localData));
    }
  };

  return (
    <div>
      <Card>
        <Form>
          <FormGroup>
            <Label>brand</Label>
            <Input
              type="select"
              name="text"
              id="text"
              placeholder="Enter brand"
              onChange={(event) =>
                setForm({ ...form, brand: event.target.value })
              }
              value={form.brand}
            >
              <option>toyota</option>
              <option>mercedes</option>
              <option>bmw</option>
              <option>honda</option>
              <option>hyundai</option>
              <option>tesla</option>
              <option>ford</option>
              <option>audi</option>
              <option>volkswagen</option>
              <option>porsche</option>
              <option>nissan</option>
              <option>ferrai</option>
              <option>kia</option>
              <option>land-rover</option>
              <option>mini</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>model</Label>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Enter model"
              onChange={(event) =>
                setForm({ ...form, model: event.target.value })
              }
              value={form.model}
            />
          </FormGroup>
          <FormGroup>
            <Label>year</Label>
            <Input
              type="text"
              name="year"
              id="year"
              placeholder="Enter year"
              onChange={(event) =>
                setForm({ ...form, year: event.target.value })
              }
              value={form.year}
            />
          </FormGroup>
          <FormGroup>
            <Label>kilometer</Label>
            <Input
              type="text"
              name="kilometer"
              id="kilometer"
              placeholder="Enter kilometer"
              onChange={(event) =>
                setForm({ ...form, kilometer: event.target.value })
              }
              value={form.kilometer}
            />
          </FormGroup>
          <FormGroup>
            <Label>color</Label>
            <Input
              type="select"
              name="color"
              id="color"
              placeholder="Enter color"
              onChange={(event) =>
                setForm({ ...form, color: event.target.value })
              }
              value={form.color}
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
          <FormGroup>
            <Label>price</Label>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Enter price"
              onChange={(event) =>
                setForm({ ...form, price: event.target.value })
              }
              value={form.price}
            />
          </FormGroup>
          <FormGroup>
            <Label>date</Label>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Enter date"
              onChange={(event) =>
                setForm({ ...form, date: event.target.value })
              }
              value={form.date}
            />
          </FormGroup>
          <FormGroup>
            <Label>place</Label>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Enter place"
              onChange={(event) =>
                setForm({ ...form, place: event.target.value })
              }
              value={form.place}
            />
          </FormGroup>
          <div className="image_div">
            <FormGroup className="ProductAdd__image">
              <Label>Image 1</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL: [event.target.value] })
                }
                value={form.imageURL[0]}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__image">
              <Label>Image 2</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({
                    ...form,
                    imageURL: [form.imageURL[0], event.target.value],
                  })
                }
                value={form.imageURL[1]}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__image">
              <Label>Image 3</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({
                    ...form,
                    imageURL: [
                      form.imageURL[0],
                      form.imageURL[1],
                      event.target.value,
                    ],
                  })
                }
                value={form.imageURL[2]}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={(event) =>
                setForm({ ...form, description: event.target.value })
              }
              value={form.description}
              style={{ height: 170, width: 505 }}
            />
          </FormGroup>
          <Button
            className="ProductAdd__button"
            color="success"
            onClick={saveItem}
          >
            EKLE
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AutoAdd;

