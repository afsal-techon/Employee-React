import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const userContext = createContext()


const authContext = ({children})=>{
    const [user, setUser] = useState(null);
   

    // useEffect(()=>{

    //     const verifyUser = async()=>{
    //         try {

    //             const {data } = await axios.get('/verify');
    //             setUser(data.user)
                
    //         } catch (err) {
    //           toast.error(err.response.data.message);
    //           navigate('/login')
    //         }
    //     }
    //     verifyUser()

    // },[])


    const login = (user)=>{
          setUser(user)
    }

    const logout=()=>{
         setUser(null);
         localStorage.removeItem('token')
    }

    return (
        <userContext.Provider value={{user,login,logout}}>
         {children}
        </userContext.Provider>
    )
}

export const useAuth = () => useContext(userContext)
export default authContext