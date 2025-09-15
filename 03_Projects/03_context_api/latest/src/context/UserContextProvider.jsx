import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

const [user, setUser] = React.useState(null)
 return(
    <UserContext.Provider value={{user, setUser}}>
    {children}    
    </UserContext.Provider>
 )

}

export default UserContextProvider


// notes:-
// children here is nothing but a generic name used;
// ---- that whatever prop you are getting use it as it is. and pass it as it is.
// ---- we can use another name as well. so we use children as it used to be in states as well.

// wrapping is providing.
// children can be <Dashboard /> , <Card /> etc.
// Alone UserContext won't work , you have to access a property, a value of it , that is Provider (yes! the literal name is provider).

//But just above things alone does not work , we are providing providing but what will it access? therefore we give data  --- const [user, setUser] = React.useState(null)

// passing prop using value keyword
// --- passing an object, so that any data access can be given --{ user, setUser}
