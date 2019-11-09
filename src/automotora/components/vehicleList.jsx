import "./vehicleList.scss";
import React, {useState} from "react";
import vehicles from "../../assets/vehicles/vehicles.js";
import rents from "../../assets/vehicles/rents.js"
import VehicleListItem from "./vehicleListItem.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Emoji from 'a11y-react-emoji'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function VehicleList(props) {
  const [displaySales, setDisplaySales] = useState(false);
  const [displayRents, setDisplayRents] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState(
    vehicles.sort((a, b) => (a.brand > b.brand ? 1 : -1))
  );
  const [filterValue, setFilterValue] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
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
  const fuelOptions = ["Todos", "Nafta", "Diesel", "Hidrido", "Electrico"];
  const fuelType = (event) => {
    setFuelFilter(event.value);
    if(event.value === "Todos"){
      setFilteredVehicles(vehicles.sort((a, b) => (a.brand > b.brand ? 1 : -1)));
    } else {
      const filtered = vehicles.filter(v =>
        v.data.fuel.toLowerCase() === (event.value.toLowerCase()),
      );
      filtered.sort((a, b) => (a.brand > b.brand ? 1 : -1));
      setFilteredVehicles(filtered);
    }
  }

  const priceRangeValues = [{value:{min:0, max:1500}, label:"0-1500"},
                            {value:{min:1500, max:4000},label:"1500-4000"},
                            {value:{min:4000, max:7000},label:"4000-7000"},
                            {value:{min:7000, max:12000},label:"7000-12000"},
                            {value:{min:12000, max:Number.MAX_SAFE_INTEGER},label:"Más de 12000"}];
  const priceRange = (event) => {
    console.log(event);
  }
  return (
    <div className={props.mobile ? "listMobile" : "list"}>
      <div className={props.mobile ? "filtersMobile" : "filters"}>
        <input 
          type="text" 
          placeholder="Busque por marca o modelo de vehiculo"
          className={props.mobile ? "searchInputMobile" : "searchInput"}
          onChange={filterVehicle} />
        <div className={props.mobile ? "dropdownMobile" : "dropdown"}>
          <div className={props.mobile ? "textMobile" : "text"}>Tipo de combustible</div>
          <Dropdown 
            className={props.mobile ? "fuelSelectorMobile" : "fuelSelector"}
            options={fuelOptions} 
            onChange={fuelType} 
            value={fuelOptions[0]}/>
          <Dropdown 
            className={props.mobile ? "priceSelectorMobile" : "priceSelector"}
            options={priceRangeValues} 
            onChange={priceRange} 
            value={priceRangeValues[0]}/>
        </div>
      </div>
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