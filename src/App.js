import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeBirth from './components/Employees/EmployeeBirth';
import Employees from './components/Employees/Employees';
import API from './services/service-api';
import { MyContext } from './context/context';
// console.log(API.response);

function App() {
  const [users, setUsers] = useState([]);
  const [isInactive, setIsInactive] = useState([]);
  // const isActive = !isInactive.some(userId => userId === users.id);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await API();
    setUsers(response.data);
  }

  return (
    <MyContext.Provider
      value={{
        users,
        setUsers,
        isInactive,
        setIsInactive,
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
