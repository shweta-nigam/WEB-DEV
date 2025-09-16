import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme:()=>{},
    lightTheme:() => {}
})


export const ThemeProvider =  ThemeContext.Provider

export default function useTheme(){      // custom hook 
    return useContext(ThemeContext)
}






// Notes:- 
// Here createContext can take an default value
// means in initial phase createContext can take values   ( note: in 1st example in 03_context-api project we did not give any default value.)
// Here the default value is an object , which is further holding default variable, and 2 functions/method.
//  in 1st Example in different folder it was this line --- const [user, setUser] = React.useState(null)