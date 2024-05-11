import { RestaurantCard } from "./RestaurantCard.jsx";
import { restaurantList } from "../Utils/mockData.js";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard key={res.data.id} resData={res.data} />
        ))}
      </div>
    </div>
  );
};
