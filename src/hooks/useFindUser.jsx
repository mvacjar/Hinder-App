export default function useFindUser(username) {
  const users = JSON.parse(localStorage.getItem("users"));
  const foundUser = users.find((u) => {
    return u.username === username;
  });
  return foundUser;
}
