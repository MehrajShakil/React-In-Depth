import { RestaurantCard } from "./RestaurantCard.jsx";
import { restaurantList } from "../Utils/mockData.js";
import { useState } from "react";

export const Body = () => {
  // Local State variable - Super powerful variable.

  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

  // React hooked - a normal js function which is given to us by react.

  // normal js variable.
  let listOfRestaurantsJS = restaurantList;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurnats
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.data.id} resData={res.data} />
        ))}
      </div>
    </div>
  );
};
