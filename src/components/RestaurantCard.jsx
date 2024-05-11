export const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={resData.imageUrl} />
      <h3> {resData.name} </h3>
      <h4> {resData.cuisine}</h4>
      <h4> {resData.avgRating} stars </h4>
      <h4> {resData.costForTwo / 100} FOR TWO</h4>
      <h4> {resData.deliveryTime} minutes </h4>
    </div>
  );
};
