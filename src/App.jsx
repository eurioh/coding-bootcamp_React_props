import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
    <Card 
      name="Elizabeth Keen" 
      img="https://lh3.googleusercontent.com/proxy/UIg-QCCsXdy0-Oa2UIoDErhHFVg7dokSTtT49gfjoQlCqL_ZraO0hGFDWebKwwW-fr-qB_IhYdjBq68QtoX9Sv_hZiUySd2wZGzNIhss_J-S8-UfGfatqYfkS8kcReJrQ_jYum7l2mecD55WbKbfMiNS0Nv-w5YAMa-miN8PuGE" 
      alt="Lizzy" 
      tell="+123 456 789" 
      email="elizabeth.keen@fbi.gov"/>

    <Card 
      name="Raymond Reddington" 
      img="https://cdnb.artstation.com/p/assets/images/images/008/997/001/large/ahmed-ouardani-a-o-reddington-photo.jpg?1516558606" 
      alt="Red" 
      tell="+987 654 321" 
      email="raymond.red@navy.mil"/>
    <Card 
      name="Dembe Zuma" 
      img="https://vignette.wikia.nocookie.net/the-blacklist/images/d/d3/Dembe_Zuma-Staffel_2.png/revision/latest/top-crop/width/360/height/450?cb=20150409110512&path-prefix=de" 
      alt="Dembe" 
      tell="+918 372 574" 
      email="dembezuma@red.com"/>

    <Card 
      name="Christopher Hargrave" 
      img="https://i.pinimg.com/originals/1e/a7/e3/1ea7e3e371cb9fc503bd75511c0225e3.jpg" 
      alt="Tom" 
      tell="+918 372 574" 
      email="tom.keen@jes.edu"/>

    </div>
  );
}
export default App;
