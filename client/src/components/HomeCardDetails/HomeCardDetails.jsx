import { useEffect, useState } from "react";
import "./HomeCardDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { getHouseById, deleteHouse } from "../../services/api";

const HomeCardDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const fetchedHouse = await getHouseById(id);
        setHouse(fetchedHouse);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    fetchHouse();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteHouse(id);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-house/${id}`);
  };

  return (
    <>
      <br />
      <div className="home-card-details-container">
        {house && (
          <>
            <h2>{house.typeOfHouse}</h2>
            <p>Address: {house.address}</p>
            <p>Rooms: {house.noOfRooms}</p>
            <p>Bathrooms: {house.noOfBathroom}</p>
            <p>Price: {house.price}</p>
            <p>Square Feet: {house.noOfSquareFeet}</p>
            <p>Availability: {house.availability}</p>
            <div className="house-details-button-container">
              <button
                style={{ backgroundColor: "red" }}
                className="delete-button"
                onClick={() => setShowModal(true)}
              >
                Delete
              </button>
              <button
                style={{ backgroundColor: "black" }}
                className="edit-button"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this house?</p>
            <div>
              <button className="confirm" onClick={handleDelete}>
                Yes
              </button>
              <button className="cancel" onClick={() => setShowModal(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCardDetails;
