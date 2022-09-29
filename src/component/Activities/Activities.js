import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';


const Activities= () => {
    const [activities, setActivities] = useState([]);

    useEffect ( ()=>{
        fetch('/public/fakeDb/activities.JSON')
        .then(res => res.json())
        .then(data => setActivities(data))
        }, [])

    return (

      <div>
        <h3>test</h3>
        {
            activities.map(activitie => <Activities></Activities>)
        }
        <Cards></Cards>
      </div>

      
    );
};

export default Activities;