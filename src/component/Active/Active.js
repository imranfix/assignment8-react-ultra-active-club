import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Cart from '../Cart/Cart';
import './Active.css';
import { addToDb, getStoredCart } from '../Storage/fakeData';


const Active= () => {
  const [activities, setActivities] = useState([]);

  const [cart , setCart] = useState([]);


  useEffect( ()=>{
    fetch('activities.JSON')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, []);



  useEffect( ()=>{
      const storedCart = getStoredCart();
      const saveCart = [];
      for(const time in storedCart){
        const addedActivitie = activities.find(activitie=>activitie.time === time);
        if(addedActivitie){
          const quantity = storedCart[time];
          addedActivitie.quantity = quantity;
          saveCart.push(addedActivitie);
            
        }
       
      }
      setCart(saveCart);

  }, [activities]);



  const handleAddToCart = (activitie) =>{
        // console.log(activitie);
        const newCart = [...cart, activitie];
        setCart(newCart);
        addToDb(activitie.time);
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
      <img className='fit-img'  src="https://image.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg" alt=''></img>

        <h3>Hanks Kayro</h3>
        <h6><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Halifax, Canada</h6>
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

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
  
      </div>
    </div>

      
    );
};

export default Active;