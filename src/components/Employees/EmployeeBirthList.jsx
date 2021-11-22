import React from 'react';
// import s from './Employees.module.css'
import { getDate} from '../../utils/getDate';


const EmployeeBirthList = ({ user }) => {
    
    return (
        <div>
                {user.firstName} {user.lastName} - {getDate(user.dob)}
        </div>
    )
}

export default EmployeeBirthList