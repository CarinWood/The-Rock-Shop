import {useState, createContext} from 'react';

export const userContext = createContext()

const UserProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] =useState('')


  return (
      <userContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
          {props.children}
      </userContext.Provider>
  )
};

export default UserProvider;