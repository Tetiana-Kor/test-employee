import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeBirth from './components/Employees/EmployeeBirth';
import Employees from './components/Employees/Employees';
import API from './services/service-api';
import { MyContext } from './context/context';

function App() {
  const [users, setUsers] = useState([]);
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem('isActive')) ?? [],
  );

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive ?? []));
    localStorage.setItem('users', JSON.stringify(users ?? []));
  }, [isActive, users]);

  async function getUser() {
    const response = await API();
    setUsers(response.data);
  }

  return (
    <MyContext.Provider
      value={{
        users,
        isActive,
        setIsActive,
      }}
    >
      <div className="App">
        <Employees users={users} />
        <EmployeeBirth />
      </div>
    </MyContext.Provider>
  );
}

export default App;
