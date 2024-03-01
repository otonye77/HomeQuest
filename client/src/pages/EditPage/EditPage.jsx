// EditHouse.js

import "./EditPage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHouseById, updateHouse } from "../../services/api";

const EditHouse = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const fetchedHouse = await getHouseById(id);
        setHouse(fetchedHouse);
        setFormData({
          typeOfHouse: fetchedHouse.typeOfHouse,
          address: fetchedHouse.address,
          noOfRooms: fetchedHouse.noOfRooms,
          noOfBathroom: fetchedHouse.noOfBathroom,
          price: fetchedHouse.price,
          noOfSquareFeet: fetchedHouse.noOfSquareFeet,
          availability: fetchedHouse.availability
        });
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    fetchHouse();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHouse(id, formData);
      navigate(`/homedetails/${id}`);
    } catch (error) {
      console.error("Error updating house:", error);
    }
  };

  return (
    <div className="edit-house-container">
      <h2>Edit House Details</h2>
      {house && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Type of House:</label>
            <input
              type="text"
              name="typeOfHouse"
              value={formData.typeOfHouse}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Number of Rooms:</label>
            <input
              type="text"
              name="noOfRooms"
              value={formData.noOfRooms}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button type="submit" className="submit-button">Update</button>
        </form>
      )}
    </div>
  );
};

export default EditHouse;
