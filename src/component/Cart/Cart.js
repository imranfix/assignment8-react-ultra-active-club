import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalTime = 0;
    let breakTime = 0;
    for(const activitie of cart){
        totalTime = parseInt(totalTime + (+activitie.time));
        breakTime = activitie.breakTime;
    }


    return (
        
<div>
    <div>
        <div>
          <h3>Exercise Info</h3>
          <div className='time1'>
            <h4>Practice Time</h4>
            <p className='color'> {totalTime}minutes</p>
            </div>

          <div className='time2'>
            <h4>Interval Time</h4>
            <p className='color'>{breakTime} minutes</p>
          </div>

                </div>
                </div>
                <div>
            <button className='btn-last'>Task Completed</button>
          </div>

              <h3>select activitie cart</h3>
                <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;