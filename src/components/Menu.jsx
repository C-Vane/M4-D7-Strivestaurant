import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert, Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes ? dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />) : <div><p>Work in progress...</p></div>}

  </Container>
);
export default Menu;
