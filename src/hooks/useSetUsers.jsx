import { useState, useEffect } from "react";

export default function useSetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const setNewUser = (newUser) => {
    setLoggedInUser(newUser);
    setAllUsers((prev) => [...prev, newUser]);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users) {
      setAllUsers(users);
    }
  }, []);

  return {
    allUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,
  };
}
