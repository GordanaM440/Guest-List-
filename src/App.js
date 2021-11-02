import React,{useState} from 'react';
import './App.css';
import Guest from "./components/Guest";

function App() {
  const [guestName, setGuestName]= useState("")
  const [guestEmail, setGuestEmail]= useState("");
   const [guestPhone, setGuestPhone]=useState("");
  const [guestList, setGuestList]= useState([]);

  const addGuest =()=>{
    setGuestList ([...guestList, {guest:guestName, email: guestEmail, phone:guestPhone }])
    setGuestName('')
    setGuestEmail('')
   
    setGuestPhone('')
  }
  return (
    <div className="App">
      <h1>Guest List</h1>

      <label> Name:</label>
      <input type="text" id ="guest" onChange={(e) => {
        setGuestName(e.target.value);
      }} />

      <label>Email:</label>
      <input type="text" id="email" onChange= {(e) =>{
        setGuestEmail(e.target.value); 
      }} />

     
      <label>Phone:</label>
      <input type="text" id="phone" onChange= {(e) =>{
        setGuestPhone(e.target.value); 
      }} />

      <button onClick={addGuest}>Add</button>
      {guestList.map((guest) =>{ 
      return <Guest guestName={guest.guest}
      guestEmail={guest.email}
      guestPhone={guest.phone}     
      />; 
      })}
    
    </div>
    );
      }


     
    
export default App;
