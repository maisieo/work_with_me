import React from 'react';
import APImap from './API map';

// import MapBubbleForm from "./MapBubbleForm";


// function MapWithNewBubble(props) {

//     console.log("This is props.value.wifi" , props.bubble.wifi)
//     return (
//         <div className="NewBubble">
//            <h2>Your new bubble has been created</h2>
//            <p>Welcome {props.bubble.name}</p>
           
//             <p> Your bubble has {props.bubble.workstations} workstation(s) to offer </p>
//             <h1> Features </h1>
//             <p>
//             <span> Wifi: {props.bubble.wifi ? "Yes" : "No"}</span>
//             {/* <span> Pet Friendly: {props.bubble.petfriendly ? "Yes" : "No"}</span>
//             <span>Kitchen Access: {props.bubble.kitchen ? "Yes" : "No"}</span>
//             <span>Quiet Space: {props.bubble.quietspace ? "Yes" : "No"}</span>
//             <span>Wheelchair Access: {props.bubble.wheelchair ? "Yes" : "No"}</span>
//             <span>Smoking Corner {props.bubble.smoking ? "Yes" : "No"}</span> */}
//             </p>


            
//             <APImap />
//         </div>
//     );
// }

const MapWithNewBubble = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default MapWithNewBubble;



