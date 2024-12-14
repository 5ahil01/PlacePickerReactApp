import React from "react";

const AvaliablePlaces = ({ places, onSelectPlace, isFetching }) => {
  return (
    <div className="h-40 border-2 border-red-500 flex gap-5">
      {isFetching && <p>Fetching data please wait... </p>}
      {places.length === 0 && !isFetching && <p>No Places Avaliable</p>}
      {places.map((place) => {
        return (
          <div key={place.id} onClick={() => onSelectPlace(place)}>
            <img
              src={`http://localhost:3000/${place.image.src}`}
              alt={place.image.alt}
              className="h-[60%]"
            />
            <h3>{place.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AvaliablePlaces;
