import React from 'react';
import "../App.css";

function Guest({guestName, guestEmail, guestAddress, guestPhone}){

    return(
        <div className="task">
            <h1 className="guest"> Guest List</h1>
            <h1>Guest Name:{guestName}</h1>
            <h1>Email: {guestEmail}</h1>
            <h1>Address: {guestAddress}</h1>
            <h1>Phone:{guestPhone}</h1>
            
        </div>

    );
}

export default Guest;