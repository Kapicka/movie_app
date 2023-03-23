import React from "react";
import ListComponent from "../components/ListComponent";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleItemClicked = (itemId: number) => {
    if (itemId === 1) {
      navigate("/series");
    }
    if (itemId === 2) {
      navigate("/movies");
    }
  };

  const listItems = [
    {
      id: 1,
      title: "Popular series",
      image: { url: require("../assets/fallbackSm.png") },
      coverText: "SERIES",
    },
    {
      id: 2,
      title: "Popular movies",
      image: { url: require("../assets/fallbackSm.png") },
      coverText: "MOVIES",
    },
  ];
  return (
    <ListComponent
      title="Popular titles"
      items={listItems}
      onItemClick={handleItemClicked}
    />
  );
};
export default HomePage;
