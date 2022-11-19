import { CastleContext } from "../context/AuthContext"
import { useContext } from "react"

export const CastleHookContext = () => {
  const context = useContext(CastleContext)

  if(!context) {
    throw Error("castleHookContext doit-être à l'intérieur castleContextProvider")
  }

  return context
}