import "./vehicleList.scss";
import React, {useState} from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import VehicleListItem from "./vehicleListItem.jsx";
function VehicleList() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
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
      <div className="vehicleList">
        {
          filteredVehicles.map((value, index) => {
              return <VehicleListItem vehicle={value} key={index}/>
          })
        }
      </div>
    </div>
  );
}
  
export default VehicleList;