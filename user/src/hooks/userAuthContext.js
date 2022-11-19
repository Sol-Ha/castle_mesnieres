import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error("Le 'useAuthContext' doit être placé dans l'AuthContextProvider")
  }

  return context
}