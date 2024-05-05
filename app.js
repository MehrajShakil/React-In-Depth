import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About us </li>
          <li> Contact us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
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

const restaurantList = [
  {
    data: {
      id: "1",
      name: "Meghna Foods",
      cuisine: "Dhaka",
      avgRating: "4.5",
      costForTwo: 40000,
      deliveryTime: 36,
      imageUrl:
        "https://images.deliveryhero.io/image/fd-bd/Products/2932680.JPG",
    },
  },
  {
    data: {
      id: "2",
      name: "Meghna Foods",
      cuisine: "Dhaka",
      avgRating: "4.5",
      costForTwo: 40000,
      deliveryTime: 36,
      imageUrl:
        "https://images.deliveryhero.io/image/fd-bd/Products/2932680.JPG",
    },
  },
  {
    data: {
      id: "3",
      name: "Meghna Foods",
      cuisine: "Dhaka",
      avgRating: "4.5",
      costForTwo: 40000,
      deliveryTime: 36,
      imageUrl:
        "https://images.deliveryhero.io/image/fd-bd/Products/2932680.JPG",
    },
  },
  {
    data: {
      id: "4",
      name: "Meghna Foods",
      cuisine: "Dhaka",
      avgRating: "4.5",
      costForTwo: 40000,
      deliveryTime: 36,
      imageUrl:
        "https://images.deliveryhero.io/image/fd-bd/Products/2932680.JPG",
    },
  },
];

const Body = () => {
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
