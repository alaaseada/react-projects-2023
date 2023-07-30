import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setLoggedInUser(user);
    } else {
      setLoggedInUser(null);
    }
  }, [isAuthenticated]);

  const logUserIn = () => {
    loginWithRedirect();
  };

  const logUserOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <UserContext.Provider
      value={{
        logUserIn,
        logUserOut,
        loggedInUser,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
