import React from 'react';

const Cart = (props) => {
    const count=props.count;
    let total=0;
    for (let i = 0; i < count.length; i++) {
        const course = count[i];
        total=total+course.price;
        
        
    }
    return (
        <div>
  
   
        </div>
    );
};

export default Cart;