import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

const Toast = () => {
    

    const diffToast = ()=>{
        toast.success("Successfully Completed !!", {
            position: 'top-center',
            className: 'toast'
            
        });
    }

    return (
        <div>
            <div>
                <button className='btn-last' onClick={diffToast}>Task Completed</button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
        
    
    );
};

export default Toast;