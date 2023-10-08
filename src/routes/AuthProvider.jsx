import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logOut =()=>{
        return signOut(auth)
    }





    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;