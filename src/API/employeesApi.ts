import axios from 'axios';

// Define the type for an employee
interface EmployeeType {
    id: number;
    name: string;
    position: string;
    skills: string;
}

const API_URL = 'http://localhost:8080';

export const fetchEmployees = async () => {
    try {
        const response = await axios.get(`${API_URL}/candidates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const fetchEmployeeById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/candidates/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
};

export const addEmployee = async (employee: EmployeeType) => {
    try {
        const response = await axios.post(`${API_URL}/candidates`, employee);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

export const updateEmployee = async (id: number, employee: EmployeeType) => {
    try {
        const response = await axios.put(`${API_URL}/candidates/${id}`, employee);
        return response.data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

export const deleteEmployee = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/candidates/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};

export default {
    fetchEmployees,
    fetchEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};
