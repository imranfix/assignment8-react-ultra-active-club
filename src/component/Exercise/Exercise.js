import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
//    console.log(props.activitie)
const {name, img, time} = props.activitie;

    return (
         <div className='exercise'>
              <img src={img} alt=""></img>
             <div className='align-text'>
             <p>{name}</p>
              <p>Time: {time}</p>
             </div>
         </div>
    

    );
};

export default Exercise;