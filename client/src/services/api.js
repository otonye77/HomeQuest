// services.js

import axios from "axios";
import baseUrl from "./baseUrl";

export const createHouse = async (houseData, userId) => {
  try {
    const response = await axios.post(`${baseUrl}/houses/createhouse`, {
      ...houseData,
      userId: userId
    });
    return response.data;
  } catch (error) {
    console.error("Error creating house:", error);
    throw error;
  }
};

export const getAllHouses = async () => {
  try {
    const response = await axios.get(`${baseUrl}/houses/getallhouses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching houses:", error);
    throw error;
  }
};

export const getHouseById = async (houseId) => {
  try {
    const response = await axios.get(`${baseUrl}/houses/${houseId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching house by ID:", error);
    throw error;
  }
};

export const deleteHouse = async (houseId, userId) => {
  try {
    const response = await axios.delete(`${baseUrl}/houses/${houseId}`, {
      data: { userId: userId }
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting house:", error);
    throw error;
  }
};


export const updateHouse = async (houseId, updatedData, userId) => {
  try {
    const response = await axios.put(
      `${baseUrl}/houses/${houseId}`,
      { ...updatedData, userId },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating house:", error);
    throw error;
  }
};

