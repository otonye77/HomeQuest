import { useEffect, useState } from "react";
import "./HomeCardDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { getHouseById, deleteHouse } from "../../services/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeCardDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); 
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem('testuserid');

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
      const response = await deleteHouse(id, userId);
      if(response.message === "House deleted successfully"){
        navigate("/home");
        toast.success("Delete successful.");
      } else {
        toast.error("You are not allowed to delete this.");
      }
    } catch (error) {
      console.error("Error deleting house:", error);
      toast.error("You are not allowed to delete this.");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-house/${id}`);
  };

  const handlePay = () => {
    setShowPaymentModal(true);
  };

  const confirmPayment = () => {
    setPaymentSuccess(true);
    setShowPaymentModal(false);
  };

  return (
    <>
      <br />
      <ToastContainer />
      <div className="home-card-details-container">
        {house && (
          <>
            <h2>{house.typeOfHouse}</h2>
            <p>Address: {house.address}</p>
            <p>Rooms: {house.noOfRooms}</p>
            <p>Bathrooms: {house.noOfBathroom}</p>
            <p>Price: ${house.price}</p>
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
              <button
                style={{ backgroundColor: "green" }}
                className="delete-button"
                onClick={handlePay}
              >
               Pay
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
       {showPaymentModal && !paymentSuccess && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to pay this price for the house?</p>
            <div>
              <button className="confirm" onClick={confirmPayment}>
                Yes
              </button>
              <button className="cancel" onClick={() => setShowPaymentModal(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {paymentSuccess && (
        <div className="modal">
          <div className="modal-content">
            <p>Payment successful!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCardDetails;
