import React, { useState } from 'react';
import s from './Employees.module.css'

const EmployeesList = ({ id, firstName, lastName}) => {
    const [isInactive, setIsInactive] = useState([])
    const isActive = !isInactive.some(userId => userId === id)
    
    const changeInput = id => () => {
        const index = isInactive.indexOf(id)
       setIsInactive(index >= 0 ? isInactive.filter(el => el !== id) : [...isInactive, id])
   }

    return (
         <ul key={id} className={s.employee__list}>
            <li className={!isActive ? (s.employee__item,  s.active) :  s.employee__item}>{firstName} {lastName}</li>
               <label>
                   <input
                    type="radio"
                     value='noActive'
                     name={id}
                     checked={isActive}
                     onChange={changeInput(id)} />
                              not active
               </label>
                <label>
                    <input
                       type="radio"
                       value='active'
                       name={id}
                       checked={!isActive}
                       onChange={changeInput(id)} />
                               active
                    </label>
        </ul>
      
    )
}

export default EmployeesList