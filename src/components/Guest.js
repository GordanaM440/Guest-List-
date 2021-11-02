import React from 'react';
import "../App.css";

function Guest({guestName, guestEmail, guestAddress, guestPhone}){

    return(
        <div className="list">
          
            <h1>Guest Name:{guestName}</h1> 
            <h1>Email: {guestEmail}</h1>
            <h1>Phone:{guestPhone}</h1>
            <hr />
            
        </div>

    );
}

export default Guest;