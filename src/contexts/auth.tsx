import axios from "axios";
import { createContext, ReactNode, useContext } from "react"
import { USER } from "../services/routes";

interface AuthProps {
    login: (
        email: string,
        password: string,
    ) => void
    register: (
        name: string,
        email: string,
        password: string,
    ) => void
}

const AuthContext = createContext<AuthProps>({
    login: (email: string, password: string) => { },
    register: (name: string, email: string, password: string) => { }
})

export const useAuth = () => useContext(AuthContext)

interface AuthContextProps {
    children: ReactNode;
}

export const Auth = ({ children }: AuthContextProps) => {

    const login = async () => {
        const data = await axios.post(USER.LOGIN)

        console.log(data)
    }

    const register = async () => {
        const data = await axios.post(USER.REGISTER)

        console.log(data)
    }
    return (
        <AuthContext.Provider
            value={{
                login,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}