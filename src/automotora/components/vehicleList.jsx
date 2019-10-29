import "./vehicleList.scss";
import React, {useState} from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import rents from "../../assets/vehicles/rents.js"
import VehicleListItem from "./vehicleListItem.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function VehicleList() {
  const [filteredVehicles, setFilteredVehicles] = useState(
    vehicles.sort((a, b) => (a.brand > b.brand ? 1 : -1))
  );
  const [filterValue, setFilterValue] = useState('');

  const filterVehicle = (event) => {
    setFilterValue(event.target.value);
    if((event.target.value.length === 0) || (event.target.value ==="") || (typeof event.target.value === "undefined")){
      setFilteredVehicles(vehicles);
    } else {
      const filtered = vehicles.filter(v =>
        v.brand.toLowerCase().includes(filterValue.toLowerCase()) || 
        v.model.toLowerCase().includes(filterValue.toLowerCase()),
      );
      setFilteredVehicles(filtered);
    }
  };

  return (
    <div className="list">
      <input 
        type="text" 
        placeholder="Busque por marca o modelo de vehiculo" 
        className="searchInput"
        onChange={filterVehicle} />
      <div className="title">Ventas y Permutas</div>
      <div className="vehicleList">
        {
          filteredVehicles.map((value, index) => {
              return <VehicleListItem vehicle={value} key={index}/>
          })
        }
      </div>
      <div className="title">Alquileres</div>
      <div className="vehicleList">
        {rents.map((value, index) =>{
          return (
              <div className={`item${index}`} key={index}>
                <div className="desc">
                  <div className="brand">{value.brand}</div>
                  <dic className="model">{value.model}</dic>
                  <dic className="specs">{value.specs}</dic>
                </div>
              </div>
            );
        })}
        </div>
    </div>
  );
}
  
export default VehicleList;