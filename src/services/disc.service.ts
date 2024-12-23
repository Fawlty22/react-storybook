// src/api.js
import axios from 'axios';
import { DiscDto } from '../interfaces/disc.interface';

// Create an axios instance for easier management of base URL and headers
const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// A function to fetch Discs
export const fetchDiscs = async (): Promise<DiscDto[]>  => {
    try {
        const response = await api.get('/discs');
        return response.data
    } catch (error) {
        throw error
    }
};

export const updateDisc = async (id: number, updatedDisc: DiscDto): Promise<DiscDto> => {
    try {
      const response = await api.put(`/discs/${id}`, updatedDisc);
      return response.data; // Return only the 'data' from the response
    } catch (error) {
      console.error('Error updating disc:', error);
      throw error; // Rethrow error so the calling function can handle it
    }
  };

