import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div>
            <h2 className='react'>React question answer</h2> <hr />
            <h3 className='question'>1. How does React work?</h3> 
            <p className='text-left'>React designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. <br />  It uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. The declarative view makes your code more predictable and easier to debug.</p>


            <h3 className='question'>2. Difference between Props and State?</h3>
            <h4 className='question'>Props</h4>
            <p className='text-left'>Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data - callback functions may be passed in as props.
            
             </p>
             <h4 className='question'>State</h4>
            <p className='text-left'>  The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

            A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to  that component.</p>      


            <h3 className='question'>3. How different uses React useEffect without API data loading?</h3>
            <p className='text-left'> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our 'effect'), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other

             imperative API.  We can read the latest count inside the effect because it’s in the scope of our function. When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.</p>
        </div>
    );
};

export default Answer;
