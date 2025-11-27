import React from "react";

const searchCity = ({ city, setCity, onSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter the city's name you want to search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default searchCity;
