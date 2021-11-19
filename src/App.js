import React, { useState, useEffect } from 'react';
import './App.css';
import Employees from './components/Employees/Employees';
import API from './services/service-api';
// console.log(API.response);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await API();
    setUsers(response.data);
  }

  return (
    <div className="App">
      <Employees users={users} />
      <div>Employees Birthday</div>
    </div>
  );
}

export default App;
