
const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
};

 const getItems = () => {
  return fetch(`${baseUrl}/items`, { headers }).then(handleResponse);
};

const addItem = ({ name, imageUrl, weather  }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, imageUrl,weather, }),
  }).then(handleResponse);
};

 const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers,
  }).then(handleResponse);
};

export default { getItems, addItem, deleteItem };