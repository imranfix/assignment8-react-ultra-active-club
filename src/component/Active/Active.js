import { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Active.css';


const Active= () => {
  const [activities, setActivities] = useState([]);

  useEffect( ()=>{
    fetch('activities.JSON')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])
    
    return (

      <div className='active-container'>
       <div className='act-container'>
          {
            activities.map(activitie => <Exercise
              key={activitie.id}
              activitie= {activitie}
              ></Exercise> )
          }
       </div>

      <div className='cart-container'>
        <h4>select active</h4>
      </div>
    </div>

      
    );
};

export default Active;