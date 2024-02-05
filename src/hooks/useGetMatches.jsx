import useFindUserIndex from "./useFindUserIndex";

export default function useGetMatches(username) {
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  let matches = [];

  const userIndex = useFindUserIndex(username);
  const userLikes = allUsers[userIndex].liked;

  userLikes.forEach((likedUser) => {
    const indexOfLikedUser = useFindUserIndex(likedUser);

    if (allUsers[indexOfLikedUser].liked.includes(username)) {
      matches.push(allUsers[indexOfLikedUser]);
    }
  });

  return matches;
}
