import React, { useEffect, useState } from "react";
import SelectedPlaces from "./Components/SelectedPlaces";
import AvaliablePlaces from "./Components/AvaliablePlaces";

const App = () => {
  const [avaliablePlaces, setAvaliablePlaces] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchAvaliablePlaces() {
      setIsFetching(true);
      const respond = await fetch("http://localhost:3000/places");
      const data = await respond.json();
      const places = data.places;
      console.log(places);
      setAvaliablePlaces(places);
      setIsFetching(false);
    }
    fetchAvaliablePlaces();
  }, []);

  function onSelectPlace(place) {
    setSelectedPlaces((prev) => {
      return [...prev, place];
    });
  }

  function handleRemovePlace(Id) {
    setSelectedPlaces((prev) => {
      return prev.filter((place) => place.id !== Id);
    });
  }

  return (
    <div>
      <SelectedPlaces
        places={selectedPlaces}
        handleRemovePlace={handleRemovePlace}
      />
      <AvaliablePlaces
        places={avaliablePlaces}
        onSelectPlace={onSelectPlace}
        isFetching={isFetching}
      />
    </div>
  );
};

export default App;
