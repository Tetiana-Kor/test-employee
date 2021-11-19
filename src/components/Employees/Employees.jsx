import React from 'react';
import s from './Employees.module.css'
import EmployeesList from './EmploeesList';


const Employees = ({ users }) => {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const sortedUsers = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
    
    
    return (
       
        <div className={s.employee}>
            <h1 className={s.employee__title} >Employees</h1>
            <div className={s.employee__wrap}>
            {alphabet.map((letter, i) => {
                let employee = false
                
             return (
              <div key={i} className={s.employee__alphabet}>
                     <h2>{letter}</h2>
                     {sortedUsers.map(({id, firstName, lastName}) => {
                        if (letter === firstName[0]) {
                            employee = true;

                            return (
                                <EmployeesList
                                    key={id}
                                    id={id}
                                    firstName={firstName}
                                    lastName={lastName}
                                />
                             );
                             }
                     } )}
                     {!employee && <h4>No Employees</h4>}
             </div>
                )
            })}
                </div>
        </div>
    )
}

export default Employees