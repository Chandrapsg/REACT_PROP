
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));

//##########################################
//React prop practice
//********************** */
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
 
<div>
   <App />
</div>

);
//###############################################
// React PROP


// function Card(props){
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <img
//             src= {props.img}
//             alt="avatar_img"
//       />
//       <p>{props.Tel}</p>
//       <p>{props.emailId}</p>

//     </div>

//   );
// }


// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
 
// <div>
// <h1>My Contacts</h1>
// <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" Tel="+123 456 789" emailId="b@beyonce.com"></Card>
// <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" Tel="+123 456 789" emailId="b@beyonce.com"></Card>
// <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" Tel="+123 456 789" emailId="b@beyonce.com"></Card>

// </div>

// );



// ###########################################################

// //#PROGRAM 1

// ////1. Create a new React app.
// //2. Create a App.jsx component.
// //3. Create a Header.jsx component that renders a <header> element
// //to show the Keeper App name in an <h1>.
// //4. Create a Footer.jsx component that renders a <footer> element
// //to show a copyright message in a <p> with a dynamically updated year.
// //5. Create a Note.jsx component to show a <div> element with a
// //<h1> for a title and a <p> for the content.
// //6. Make sure that the final website is styled like the example shown here:
// //https://l1pp6.csb.app/

// //HINT: You will need to study the classes in teh styles.css file to appy styling.



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from "./components/App.jsx"

// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <App/>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// //##################################################//
