import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import AutoCard from "../AutoCard/AutoCard";
import FilterSection from "../FilterSection/FilterSection";
import CategorySection from "../CategorySection/CategorySection";
import "./AutoList.css";

const AutoList = (props) => {
  const [searchBrand, setSearchBrand] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchPlace, setSearchPlace] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchColor, setSearchColor] = useState("");

  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }
  return (
    <div className="AutoList__page">
      <div className="FilterSection">
        <div className="CategorySection">
          <CategorySection
            props={props.items}
            searchBrand={searchBrand}
            setSearchBrand={setSearchBrand}
          />
        </div>
        <div className="FilterSection">
          <FilterSection
            searchPrice={searchPrice}
            setSearchPrice={setSearchPrice}
            searchYear={searchYear}
            setSearchYear={setSearchYear}
            searchPlace={searchPlace}
            setSearchPlace={setSearchPlace}
            searchColor={searchColor}
            setSearchColor={setSearchColor}
          />
        </div>
      </div>
      <div>
        <Card className="AutoList__Card">
          <CardBody className="AutoList__CardBody">
            <div style={{width:'161px', marginLeft: '-16px'}}></div>
            <div style={{width:'160px'}}>Model</div>
            <div style={{width:'248.675px'}}>İlan Başlığı</div>
            <div style={{width:'42.25px'}}>Yıl</div>
            <div style={{width:'82.625px'}}>Kilometre</div>
            <div style={{width:'71px'}}>Renk</div>
            <div style={{width:'84.0375px'}}>Fiyat</div>
            <div style={{width:'71px'}}>Tarih</div>
            <div style={{width:'123px', marginRight: '-16px' }}>İl/İlçe</div>
          </CardBody>
        </Card>
        {props.items
          .filter((e) =>
            e.brand
              .toLocaleLowerCase()
              .includes(searchBrand.toLocaleLowerCase())
          )
          .filter((e) =>
            e.price
              .toLocaleLowerCase()
              .includes(searchPrice.toLocaleLowerCase())
          )
          .filter((e) =>
            e.place
              .toLocaleLowerCase()
              .includes(searchPlace.toLocaleLowerCase())
          )
          .filter((e) =>
            e.year.toLocaleLowerCase().includes(searchYear.toLocaleLowerCase())
          )
          .filter((e) =>
            e.color
              .toLocaleLowerCase()
              .includes(searchColor.toLocaleLowerCase())
          )
          .map((autos) => (
            <AutoCard
              key={autos.id}
              id={autos.id}
              imageURL={autos.imageURL}
              model={autos.model}
              description={autos.description}
              year={autos.year}
              kilometer={autos.kilometer}
              color={autos.color}
              price={autos.price}
              date={autos.date}
              place={autos.place}
            />
          ))}
      </div>
    </div>
  );
};

export default AutoList;
