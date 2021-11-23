import React from 'react';
import s from './Employees.module.css'
import { getDate} from '../../utils/getDate';


const EmployeeBirthList = ({ user }) => {
    
    return (
        <li className={s.employee__birthList}>
                {user.firstName} {user.lastName} - {getDate(user.dob)}
        </li>
    )
}

export default EmployeeBirthList