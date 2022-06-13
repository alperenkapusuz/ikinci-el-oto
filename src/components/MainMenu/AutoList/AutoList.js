import React, { useState } from "react";
import AutoCard from "../AutoCard/AutoCard";
import FilterSection from "../FilterSection/FilterSection";
import CategorySection from "../CategorySection/CategorySection";
import "./AutoList.css"

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
      <div className="AutoCard">
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
            e.year
              .toLocaleLowerCase()
              .includes(searchYear.toLocaleLowerCase())
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
              model={autos.model}
              imageURL={autos.imageURL}
              price={autos.price}
              place={autos.place}
              year={autos.year}
              color={autos.color}
            />
          ))}
      </div>
    </div>
  );
};

export default AutoList;
