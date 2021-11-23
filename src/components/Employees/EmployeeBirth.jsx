import React, { useContext}from 'react';
import s from './Employees.module.css'
import { getAllMonths, getDate } from '../../utils/getDate';
import { MyContext } from '../../context/context';
import EmployeeBirthList from './EmployeeBirthList';

const EmployeeBirth = () => {
    const {isActive,  users} = useContext(MyContext)
    
    const sortedUsers = [...users]
        .filter(user => isActive.includes(user.id))
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    


    return (
        <div className={s.employee__b}>
            <h2 className={s.employee__title} >Employees Birthday</h2>
            {isActive.length === 0
                ? <p className={s.employee__empty}>Employees List is empty</p>
                : <ul className={s.employee__birth}>
                    {getAllMonths().map(month => {
                        let isExistEmployee = true
                        return (
                            <li className={s.employee__month} key={month}>
                                <p className={s.employee__monthList}>{month}</p>
                            <ul>
                                {sortedUsers
                                    .filter(({ dob }) => getDate(dob).includes(month))
                                    .map(user => {
                                    isExistEmployee = false
                                    return (
                                      <EmployeeBirthList key={user.id} user={user} />
                                     ) }) }
                                    {isExistEmployee &&
                                        <p>No Employee</p>
                                    }
                              </ul>
                           </li>
                              )})}
                     </ul>
            }
        </div>
    )}

export default EmployeeBirth
