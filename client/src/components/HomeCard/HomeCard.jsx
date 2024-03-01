/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./HomeCard.css";
import HouseOne from "../../assets/houseone.jpeg";

const HomeCard = ({ data }) => {
  return (
    <Link style={{ color: 'black' }} to={{ pathname: `/homedetails/${data.id}`, state: { data: data } }} className="home-card">
      <img src={HouseOne} alt={HouseOne} className="home-card-image" />
      <div className="home-card-details">
        <h2 className="home-card-title">{data.typeOfHouse}</h2>
        <p className="home-card-text">Address: {data.address}</p>
        <p className="home-card-text">Rooms: {data.noOfRooms}</p>
        <p className="home-card-text">Bathrooms: {data.noOfBathroom}</p>
        <p className="home-card-text">Price: {data.price}</p>
        <p className="home-card-text">Square Feet: {data.noOfSquareFeet}</p>
        <p className="home-card-text">Availability: {data.availability}</p>
      </div>
    </Link>
  );
};

export default HomeCard;

