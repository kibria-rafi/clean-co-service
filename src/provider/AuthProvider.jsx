import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../config/firebase.config";

const AuthContext = createContext()
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
   const [isLoading,setIsLoading]=useState(null)

   const createUser =(email,password)=>{
    isLoading(true)
   return createUserWithEmailAndPassword(auth,email,password);
    
   }
  

    const authInfo ={
       user,
       createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;