import React, { useContext } from 'react';
import s from './Employees.module.css'
import { MyContext } from '../../context/context';

const EmployeesList = ({id, firstName, lastName}) => {
    const { isActive, setIsActive} = useContext(MyContext)
    const isExist = !isActive.some(userId => userId === id)

    
    const changeInput = id => () => {
    const index = isActive.indexOf(id)
       setIsActive(index >= 0 ? isActive.filter(el => el !== id) : [...isActive, id])
   }

    return (
         <ul key={id} className={s.employee__list}>
            <li className={!isExist
                ? (s.employee__item, s.active)
                : s.employee__item}>{firstName} {lastName}</li>
               <label>
                   <input
                    type="radio"
                     value='noActive'
                     name={id}
                     checked={isExist}
                     onChange={changeInput(id)} />
                              not active
               </label>
                <label>
                    <input
                       type="radio"
                       value='active'
                       name={id}
                       checked={!isExist}
                       onChange={changeInput(id)} />
                               active
                    </label>
        </ul>
      
    )
}

export default EmployeesList