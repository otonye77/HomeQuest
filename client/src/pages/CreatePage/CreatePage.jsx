import { useState } from 'react';
import "./CreatePage.css";
import { createHouse } from '../../services/api';
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('testuserid');
    const [formData, setFormData] = useState({
        typeOfHouse: '',
        address: '',
        noOfRooms: '',
        availability: '',
        userId: '', 
        noOfBathroom: '',
        price: '',
        noOfSquareFeet: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createHouse(formData, userId);
            console.log('House created successfully');
            navigate("/home");
            setFormData({
                typeOfHouse: '',
                address: '',
                noOfRooms: '',
                availability: '',
                userId: '',
                noOfBathroom: '',
                price: '',
                noOfSquareFeet: '',
                image: ''
            });

        } catch (error) {
            console.error('Error creating house:', error);
        }
    };

    return (
        <div className="container">
            <h1>Create a House</h1>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Type of House:</label>
                <input type="text" name="typeOfHouse" value={formData.typeOfHouse} onChange={handleChange} className="input" required />
                <label className="label">Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="input" required />
                <label className="label">Number of Rooms:</label>
                <input type="text" name="noOfRooms" value={formData.noOfRooms} onChange={handleChange} className="input" required />
                
                
                <label className="label">Availability:</label>
                <input type="text" name="availability" value={formData.availability} onChange={handleChange} className="input" />


                <label className="label">Number of Bathrooms:</label>
                <input type="text" name="noOfBathroom" value={formData.noOfBathroom} onChange={handleChange} className="input" />
                <label className="label">Price:</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} className="input" required />
                <label className="label">Number of Square Feet:</label>
                <input type="text" name="noOfSquareFeet" value={formData.noOfSquareFeet} onChange={handleChange} className="input" />
                <label className="label">Image:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} className="input" />
                <button type="submit" className="button">Create House</button>
            </form>
        </div>
    );
};

export default CreatePage;
