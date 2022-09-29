import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
           <h5 className='text'><FontAwesomeIcon
            icon={faTasks}> </FontAwesomeIcon> Different Types of Activies</h5>

            <h5 className='text-align'>Choose Exercise</h5>
            
        </div>
    );
};

export default Header;