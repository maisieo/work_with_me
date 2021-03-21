import React, { useState } from "react";
import NewBubbleForm from "./NewBubbleForm";
import APImap from "./API map"

function NewBubble(props) {
  const [name, setName] = React.useState("");
  // const [location, setLocation] = React.useState("");
  const [workstations, setWorkstations] = useState(0);
  // const [isChecked , setIsChecked] = useState(false)
  const [wifi, setWifi] = React.useState(true);
  const [petfriendly, setPetfriendly] = React.useState(false)
  const [kitchen, setKitchen] = React.useState(false);
  const [quietspace, setQuietspace] = React.useState(false);
  const [wheelchair, setWheelchair] = React.useState(false);
  const [smoking, setSmoking] = React.useState(false);
  


  function handleChange(event) {
    // console.log('event: ', event)
    console.log(event.target.checked);
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      // case "location":
      //   setLocation(event.target.value);
        // break;
      case "workstations":
        setWorkstations(event.target.value);
        break;
      case "wifi":
        setWifi(event.target.checked);
        break;
      case "petfriendly":
        setPetfriendly(event.target.checked);
          break;
      case "kitchen":
        setKitchen(event.target.checked);
        break;
      case "quietspace":
        setQuietspace(event.target.checked);
        break;
      case "wheelchair":
        setWheelchair(event.target.checked);
        break;
      case "smoking":
        setSmoking(event.target.checked);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `A request has been logged: 
        From ${name} with ${workstations} spots and WIFI ${wifi}
        `
    );
    let newBubbleData = {name, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking}
    props.showNewBubble(newBubbleData);
    console.log("New bubble" , newBubbleData)
    setName("");
    setWorkstations("");
    setWifi("");
    setPetfriendly("")
    setKitchen("")
    setQuietspace("")
    setWheelchair("")
    setSmoking("")
    // the submission event would then add the new bubble to the backend tables
    // the map would then be returned with the new bubble on it
  }

  return (
    <div className="NewBubble">
      <form onSubmit={handleSubmit}>
        Create a new Bubble
        <NewBubbleForm
          name={name}
          // location={location}
          workstations={workstations}
          handleChange={handleChange}
          wifi={wifi}
          petfriendly={petfriendly}
          kitchen={kitchen}
          quietspace={quietspace}
          wheelchair={wheelchair}
          smoking={smoking}

        />
         <APImap />
        <button id="buttonCreateBubble" type="submit">
          {" "}
          Create a bubble{" "}
        </button>
      </form>
    </div>
  );
}

export default NewBubble;

