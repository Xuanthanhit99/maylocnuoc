'use client';

import axios from "axios"
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react"

type TypeUser = {
    username: any,
    email: any,
    password: any
}

interface TypeAuthContext {
    user?: string | null,
    isAuth?: boolean,
    Login: (user: TypeUser) => Promise<any>,
    Logout?: (user: TypeUser) => Promise<any>,
    Register?: (user: TypeUser) => Promise<any>,
}

export const AuthContext = createContext<TypeAuthContext>({
    user: null,
    isAuth: false,
    Login: async (user: TypeUser) => await Promise ,
})

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState();
    const [isAuth, setIsAuth] = useState(false)
    const router = useRouter();
    const Login = async ({username, email, password}: TypeUser) => {
        try {
          const fetchApiLogin = await axios.post("/api/user/register", {
            username,
            email,
            password,
          })
          if(fetchApiLogin?.data?.success) {
            setIsAuth(true)
            router.push("/")
          } else {
            setIsAuth(false)
          }
        } catch (error) {
            setIsAuth(false)
        }
      }

    return (
        <AuthContext.Provider value={{
            user,
            isAuth,
            Login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContextDefault = () => useContext(AuthContext);