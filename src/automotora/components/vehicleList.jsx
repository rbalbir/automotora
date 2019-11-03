import "./vehicleList.scss";
import React, {useState} from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import rents from "../../assets/vehicles/rents.js"
import VehicleListItem from "./vehicleListItem.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Emoji from 'a11y-react-emoji'
function VehicleList(props) {
  const [displaySales, setDisplaySales] = useState(false);
  const [displayRents, setDisplayRents] = useState(false);
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
    <div className={props.mobile ? "listMobile" : "list"}>
      <input 
        type="text" 
        placeholder="Busque por marca o modelo de vehiculo"
        className={props.mobile ? "searchInputMobile" : "searchInput"}
        onChange={filterVehicle} />
      <div className={props.mobile ?"titleMobile":"title"} onClick={() => {setDisplaySales(!displaySales)}}>Ventas y Permutas</div>
      <div className={displaySales ? (props.mobile ? "vehicleListMobile" :"vehicleList") : "displayNone"}>
        {
          filteredVehicles.map((value, index) => {
              return <VehicleListItem mobile={props.mobile} vehicle={value} key={index}/>
          })
        }
      </div>
      <div className={props.mobile ?"titleMobile":"title"} onClick={() => {setDisplayRents(!displayRents)}}>Alquileres</div>
      <div className={displayRents ? (props.mobile ? "vehicleListMobile" :"vehicleList") : "displayNone"}>
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