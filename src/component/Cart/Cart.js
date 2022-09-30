import { addToDb } from '../Storage/fakeData';

const Cart = (props) => {
    const {cart} = props;
    let totalTime = 0;
    // let breakTime = 0;
    for(const activitie of cart){
        totalTime = parseInt(totalTime + (+activitie.time));
        // breakTime = activitie.breakTime;
    }

    const handleAddBreak = (data)=>{
      addToDb(data);
    }


    return (
        
  <div>
    <div>
        <h4>Add a Break</h4>
          <div className='time'>
           <button onClick ={()=>handleAddBreak('10')}  class="btn-time">10m</button>
           <button onClick={()=>handleAddBreak('20')} class="btn-time">20m</button>
           <button onClick={()=>handleAddBreak('30')} class="btn-time">30m</button>
           <button onClick={()=>handleAddBreak ('40')} class="btn-time">40m</button>

           </div>
        </div>

    <div>
        <div>
          <h3>Exercise Info</h3>
          <div className='time1'>
            <h4>Practice Time</h4>
            <p className='color'> {totalTime}minutes</p>
            </div>

          <div className='time2'>
            <h4>Interval Time</h4>
            <p className='color'>{addToDb.length} minutes</p>
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