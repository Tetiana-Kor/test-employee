import React, { useContext}from 'react';
// import s from './Employees.module.css'
import { getAllMonths, getDate } from '../../utils/getDate';
import { MyContext } from '../../context/context';
import EmployeeBirthList from './EmployeeBirthList';

const EmployeeBirth = () => {
    const {isInactive,  users} = useContext(MyContext)
    const smth = []
    
    const sortedUsers = [...users]
        .filter(user => !isInactive.includes(user.id))
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    
//    const isActive = !isInactive.some(userId => userId === users.id)
    


    return (
        <div>
            <h2>Employees Birthday</h2>
            {isInactive.length === 0
                ? <p>Employees List is empty</p>
                : <div>
                    {getAllMonths().map(month => {
                        return (
                                <div key={month}><p>{month}</p>
                                <div>
                                    {sortedUsers
                                        .filter(({ dob }) => getDate(dob).includes(month))
                                        .map(user => {
                                        return (
                                            <EmployeeBirthList key={user.id} user={user} />
                                          )
                                        })
                                       }
                                   </div>
                                </div>
                              )
                            }
                            
                    )}
                     </div>
            }
  
        </div>
    )
}

export default EmployeeBirth

// "dob": "2019-09-19T09:34:32.083Z"
// .map(({ id, firstName, lastName, dob }) => {
                                    //     return (
                                    //         <div>{firstName} {lastName} - {getDate(dob)}</div>
                                    //     )
                                    // console.log(getDate(user.dob).includes(month));
                                    // if (getDate(user.dob).includes(month)) {
                                    //     return (
                                    //         <div>{user.firstName} {user.lastName} - {getDate(user)}</div>
                                    //     )
                                    // }