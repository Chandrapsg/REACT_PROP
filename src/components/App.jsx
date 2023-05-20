import React from  "react";
import Cart from "./Cart.jsx"
import Header from "./Header.jsx";
import contacts from "../contacts";
// import Footer from "./Footer.jsx";
// import Note from "./Note.jsx"


// // Program1
// function App(){
//     return (
//     <div>
//         <Header/>
//         <Note/>
//         <Footer/>
//     </div>

//     );
// }

// export default App;
// ########################################################
// React props practice
function App(){
       return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Cart
            pname = {contacts[0].name}
            img = {contacts[0].imgURL}
            tel = {contacts[0].phone}
            email = {contacts[0].email}
            />
            <Cart
            pname = {contacts[1].name}
            img = {contacts[1].imgURL}
            tel = {contacts[1].phone}
            email = {contacts[1].email}
            />
            <Cart
            pname = {contacts[2].name}
            img = {contacts[2].imgURL}
            tel = {contacts[2].phone}
            email = {contacts[2].email}
            />
        </div>
      );
}

export default App;
// ########################################################

// ########################################################

// ########################################################

// ########################################################
