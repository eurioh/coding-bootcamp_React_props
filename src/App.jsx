import React from "react";
import Card from "./components/Card";
import contacts from "./contacts.js";

function createCard(contact){
  return <Card
    key={contact.id} 
    name= {contact.name}
    img={contact.img}
    alt={contact.alt}
    tell={contact.tell}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
    
      {contacts.map(createCard)}

    </div>
  );
}
export default App;
