import { CDN_URL } from "../Utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3> {resData.name} </h3>
      <h4> {resData.cuisines}</h4>
      <h4> {resData.avgRatingString} stars </h4>
      <h4> {resData.costForTwo} </h4>
      <h4> {resData.deliveryTime} minutes </h4>
    </div>
  );
};
