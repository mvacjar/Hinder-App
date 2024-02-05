import SwipeCTA from '../components/SwipeCTA';
import Carousel from '../components/Carousel';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ContextProvider } from '../context/context';
import useFindUserIndex from '../hooks/useFindUserIndex';

export default function MainPage() {
  const { loggedInUser } = useContext(ContextProvider);
  const [carouselImages, setCarouselImages] = useState([]);
  const [activeUser, setActiveUser] = useState([]);

  const removeCarouselImage = (activeUser) => {
    const newUsers = carouselImages.filter(
      (user) => user.username !== activeUser.username
    );
    setCarouselImages(newUsers);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const filterUser = users.filter(
      (u) => u?.username !== loggedInUser.username
    );

    const loggedInUserIndex = useFindUserIndex(loggedInUser.username);

    const filterUserAndLikes = filterUser.filter((person) => {
      return !users[loggedInUserIndex].liked.includes(
        person.username
      );
    });

    const filterUserAndLikesAndDislikes = filterUserAndLikes.filter(
      (person) => {
        return !users[loggedInUserIndex].disliked.includes(
          person.username
        );
      }
    );

    const filteredCarousel = filterUserAndLikesAndDislikes;

    setCarouselImages(filteredCarousel);
  }, [loggedInUser]);

  useEffect(() => {
    const setRandomImage = () => {
      const randomImage =
        carouselImages[
          Math.floor(Math.random() * carouselImages.length)
        ];
      setActiveUser(randomImage);
    };
    setRandomImage();
  }, [carouselImages]);

  return (
    <div className='mb-10'>
      <Carousel
        setActiveUser={setActiveUser}
        carouselImages={carouselImages}
      />
      <SwipeCTA
        activeUser={activeUser}
        removeCarouselImage={removeCarouselImage}
        carouselImages={carouselImages}
      />
    </div>
  );
}
