import { createContext, useReducer } from 'react'

export const AdminContext = createContext()

export const adminsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS': 
      return {
        users: action.payload
      }
    case 'CREATE_USER':
      return {
        users: [action.payload, ...state.users]
      }
    case 'DELETE_USER':
      return {
        users: state.users.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminsReducer, {
    users: null
  })

  return (
    <AdminContext.Provider value={{...state, dispatch}}>
      { children }
    </AdminContext.Provider>
  )
}