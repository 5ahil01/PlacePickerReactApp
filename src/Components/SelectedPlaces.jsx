import React from "react";

const SelectedPlaces = ({ places, handleRemovePlace }) => {
  return (
    <div className="h-40 border-2 border-blue-300 flex gap-5">
      {places.length === 0 && <p>Select Any place from below</p>}
      {places.map((place) => {
        return (
          <div key={place.id} onClick={() => handleRemovePlace(place.id)}>
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

export default SelectedPlaces;
