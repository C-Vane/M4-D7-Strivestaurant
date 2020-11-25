import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert, Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {!dishes && <Alert>Work in progress...</Alert>}
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
  </Container>
);
export default Menu;
