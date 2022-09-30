const addToDb = data =>{
    let exerciseCart = {};

    
    // get the exercise cart from local storage:
    const storeCart = localStorage.getItem('exercise-cart');
    if(storeCart){
        exerciseCart = JSON.parse(storeCart);
    }   

    // add quantiy:
    const quantity = exerciseCart[data];
    if(quantity){
        const newQuantity = quantity + 1;
        exerciseCart[data] = newQuantity;
    }
    else{
        exerciseCart[data] = 1;
    }
   localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart));

}

    const getStoredCart = () =>{
        let exerciseCart = {};

    
        // get the exercise cart from local storage:
        const storeCart = localStorage.getItem('exercise-cart');
        if(storeCart){
            exerciseCart = JSON.parse(storeCart);
        }
        return exerciseCart;
    }


export{ addToDb,
        getStoredCart
 }