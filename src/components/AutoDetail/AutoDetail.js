import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  UncontrolledCarousel,
  ListGroup,
  ListGroupItem,
  Card
} from "reactstrap";
import "./AutoDetail.css"

const AutoDetail = (props) => {
  const { autoId } = useParams();
  const [thisAuto, setThisAuto] = useState("");
  const [thisAutoImage, setThisImage] = useState([]);

  const images = [
    {
      src: thisAutoImage[0],
    },
    {
      src: thisAutoImage[1],
    },
    {
      src: thisAutoImage[2],
    },
  ];

  useEffect(() => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].id === autoId) {
        setThisAuto(props.items[i]);
      }
    }

    for (let j = 0; j < props.items.length; j++) {
      if (props.items[j].id === autoId) {
        setThisImage(props.items[j].imageURL);
      }
    }
  }, []);

  return (
    <div className="AutoDetail__page">
      <div className="AutoDetail__title">{thisAuto.title}</div>
      <div className="AutoDetail__InfoAndImg">
      <div className="AutoDetail__ImageCards">
        <div className="AutoDetail__Carousel">
          <UncontrolledCarousel
            indicators={false}
            className="ProductDetail__Image"
            items={images}
          />
        </div>
      </div>
      <div className="AutoDetail__Info">
        <ListGroup>
          <ListGroupItem style={{ display:"flex" }}>{thisAuto.price} TL</ListGroupItem>
          <ListGroupItem style={{ display:"flex" }}>{thisAuto.place}</ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p >İlan No:</p>
            <div>{thisAuto.id}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>İlan Tarihi:</p>
            <div>{thisAuto.date}</div>
          </ListGroupItem >
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Marka:</p>
            <div>{thisAuto.brand}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}> 
            <p>Yıl:</p>
            <div>{thisAuto.year}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Kilometre:</p>
            <div>{thisAuto.kilometer}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Vites Tipi:</p>
            <div>{thisAuto.gearType}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Yakıt Tipi:</p>
            <div>{thisAuto.fuelType}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Kasa Tipi:</p>
            <div>{thisAuto.caseType}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Motor Hacmi:</p>
            <div>{thisAuto.engineCapacity} cc</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Motor Gücü:</p>
            <div>{thisAuto.motorPower} hp</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Çekiş:</p>
            <div>{thisAuto.traction}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Marka:</p>
            <div>{thisAuto.brand}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Ort. Yakıt Tüket...:</p>
            <div>{thisAuto.averageFuelConsumption} lt</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Yakıt Deposu:</p>
            <div>{thisAuto.tank} lt</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Boya Değişen:</p>
            <div>{thisAuto.changingAndPaint}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Takasa Uygun:</p>
            <div>{thisAuto.swap}</div>
          </ListGroupItem>
          <ListGroupItem style={{ display:"flex",height:"40px" }}>
            <p>Kimden:</p>
            <div>{thisAuto.fromWho}</div>
          </ListGroupItem>
        </ListGroup>
      </div>
      </div>
      <Card className="AutoDetail__Description">fasdfs</Card>
    </div>
  );
};

export default AutoDetail;
