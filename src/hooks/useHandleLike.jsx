import useFindUserIndex from "./useFindUserIndex";
import { useContext } from "react";
import { ContextProvider } from "../context/context";

export default function useHandleLike(selectedUser) {
  const { loggedInUser } = useContext(ContextProvider);
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = useFindUserIndex(loggedInUser);

  if (userIndex !== -1) {
    allUsers[userIndex].liked.push(selectedUser);
    localStorage.setItem("users", JSON.stringify(allUsers));
  } else {
    console.log("Person not found");
  }
}
