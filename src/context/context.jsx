import { createContext, useContext, useEffect, useState } from "react";
import useSetUsers from "../hooks/useSetUsers";
export const ContextProvider = createContext(null);
import useGetMatches from "../hooks/useGetMatches";

export const Context = ({ children }) => {
  const { loggedInUser, setLoggedInUser, setNewUser } = useSetUsers();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (loggedInUser) {
      const tempMatches = useGetMatches(loggedInUser.username);
      setMatches(tempMatches);
    }
  }, [loggedInUser]);

  const value = {
    loggedInUser,
    setLoggedInUser,
    setNewUser,
    matches,
    setMatches,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }
  return context;
};
