import React from "react";
import Card from "./components/Card";
import contacts from "./contacts.js";

function createCard(contact){
  return <Card
    key={contact.id} // uniq component key is not to show
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
      {/* need curly braces so it is interpreted as javascript code */}

      {/* <Card 
        name = {contacts[0].name}
        img = {contacts[0].img}
        alt={contacts[0].alt}
        tell={contacts[0].tell}
        email={contacts[0].email}
     />
    <Card 
        name = {contacts[1].name}
        img = {contacts[1].img}
        alt={contacts[1].alt}
        tell={contacts[1].tell}
        email={contacts[1].email}
     />

    <Card 
            name = {contacts[2].name}
            img = {contacts[2].img}
            alt={contacts[2].alt}
            tell={contacts[2].tell}
            email={contacts[2].email}
        />

    <Card 
                name = {contacts[3].name}
                img = {contacts[3].img}
                alt={contacts[3].alt}
                tell={contacts[3].tell}
                email={contacts[3].email}
            /> */}

    </div>
  );
}
export default App;
