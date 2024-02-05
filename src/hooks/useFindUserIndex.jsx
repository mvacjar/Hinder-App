export default function useFindUserIndex(username) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = users.findIndex((u) => u.username === username);

  return userIndex;
}
