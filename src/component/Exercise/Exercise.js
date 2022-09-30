import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
//    console.log(props.activitie)
const {name, img, time} = props.activitie;
// const handleAddToCart = () =>{
//     console.log('clicked');
// }

    return (
         <div className='exercise'>
              <img src={img} alt=""></img>
             <div className='align-text'>
             <p className='font'>{name}</p>
              <p>Time: {time}</p>
             </div>
             <button onClick={()=>props.handleAddToCart(props.activitie)} className='btn-cart'>
                <p className='btn-text'>Add to Task</p>
             </button>
         </div>
    

    );
};

export default Exercise;