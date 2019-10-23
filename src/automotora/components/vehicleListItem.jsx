import "./vehicleListItem.scss";
import React from "react";
import vehicles from "../../assets/vehicles/vehicles.js";

function VehicleList(props) {
    const dir = "src/assets/vehicles/vehicleList"+props.vehicle.imgs[0];
    console.log("dir", dir);
    return (
      <div className="vehicleListItem">
          <img src={dir}></img>
          <div className="name">
              <div className="brand">{props.vehicle.brand}</div>
              <div className="model">{props.vehicle.model}</div>
              <div className="price">{props.vehicle.price}</div>
          </div>
      </div>
    );
}
  
export default VehicleList;