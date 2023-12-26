// Import Axios in your JavaScript file
import axios from 'axios';

// Base URL of your API
const baseURL = 'http://localhost:8080';

// Example: Create (POST)
const createData = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/users`, data);
    console.log('Create Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Create Error:', error);
    throw error;
  }
};

// Example: Read (GET)
const readAllData = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/users`);
    console.log('Read Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Read Error:', error);
    throw error;
  }
};

// Example: Real All Data (GET)


// Example: Update (PUT)
const updateData = async (id, updatedData) => {
  try {
    const response = await axios.put(`${baseURL}/endpoint/${id}`, updatedData);
    console.log('Update Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Update Error:', error);
    throw error;
  }
};

// Example: Delete (DELETE)
const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/endpoint/${id}`);
    console.log('Delete Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Delete Error:', error);
    throw error;
  }
};

// Usage Examples:
/*
(async () => {
  try {
  const newData = await createData({
  // data for creating
  });
    const allData = await readData();
const updatedData = await updateData(newData.id, {
    // data here
});
    const deletedData = await deleteData(updatedData.id);
  } catch (error) {
    console.error('Main Error:', error);
  }
})();
*/
