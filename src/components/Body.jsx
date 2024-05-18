import { RestaurantCard } from "./RestaurantCard.jsx";
import { restaurantList } from "../Utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";

export const Body = () => {
  // Local State variable - Super powerful variable.
  console.log("body rendered");

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // use Effect is being called after render cycle has been completed.
  useEffect(() => {
    // so, after body componet rendered, the callback function is being called.
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // it is not given by js, it's provided by browser.
    // fetch will return a promise.
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.612912&lng=77.2295097&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("body render started");

  return filteredRestaurants.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              const filteredList =
                searchText === ""
                  ? listOfRestaurants
                  : listOfRestaurants.filter((res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurnats
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};
