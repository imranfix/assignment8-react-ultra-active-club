import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Active.css';


const Active= () => {
  const [activities, setActivities] = useState([]);

  const [cart , setCart] = useState([]);

  useEffect( ()=>{
    fetch('activities.JSON')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, []);

  const handleAddToCart = (activitie) =>{
        console.log(activitie);
        const newCart = [...cart, activitie];
        setCart(newCart);
     }
    
    
    return (

      <div className='active-container'>
       <div className='act-container'>
          {
            activities.map(activitie => <Exercise
              key={activitie.id}
              activitie= {activitie}
              handleAddToCart={handleAddToCart}
              ></Exercise> )
          }
       </div>



       

    <div className='cart-container'>
      <div className='person'>
      <img  src="/images/profile.jpg" alt=''></img>

        <h3>Kolim Kayro</h3>
        <h6><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Dhaka, Bangladesh</h6>
      </div>

      <div className='profile'>
         <div>
            <h3>55kg</h3>
            <p class='weight'>Weight</p>
         </div>

         <div>
            <h3>5.5</h3>
            <p className='height'>Height</p>
         </div>

         <div>
              <h3>23yrs</h3>
              <p className='age'>Age</p>
         </div>
      </div>
      <div>
            <h4>Add a Break</h4>
          <div className='time'>
           <button class="btn-time">10m</button>
           <button class="btn-time">20m</button>
           <button class="btn-time">30m</button>
           <button class="btn-time">40m</button>

           </div>
        </div>

        <div>
          <h3>Exercise Info</h3>
          <div className='time1'>
            <h4>Practice Time</h4>
            <p className='color'>minutes</p>
            </div>
          <div className='time2'>
            <h4>Interval Time</h4>
            <p className='color'>minutes</p>
          </div>
         
        </div>
          <div>
            <button className='btn-last'>Task Completed</button>
          </div>

            <div className='sticky'>
              <h3>select activitie</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
            <div>
             <button>Answer</button>
            </div>
      </div>
    </div>

      
    );
};

export default Active;