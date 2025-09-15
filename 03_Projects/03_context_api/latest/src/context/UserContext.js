import React from "react"

const UserContext = React.createContext();



export default UserContext





// notes:-
// This file include pure js therefore js and not jsx.
// UserContext will be used as wrapper. which will make it provider.
// context is like a global variable.
// all the wrapped components wil be able to access the states through context. 