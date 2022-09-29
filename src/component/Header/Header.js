import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Active from '../Active/Active';

import './Header.css'

const Header = () => {
    return (
        <div>
           <h3 className='text'><FontAwesomeIcon
            icon={faTasks}> </FontAwesomeIcon> Different Types of Activities</h3>

            <h3 className='text-align'>Choose Exercise</h3>
            <Active></Active>
        </div>
    );
};

export default Header;