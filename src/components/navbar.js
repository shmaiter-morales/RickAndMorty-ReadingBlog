import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../styles/navbar.css";

const NavbarRickYMorty = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-end">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              width="75"
              height="75"
              className="rounded-circle mr-5"
              alt="R&M Logo"
            />
            <h1 className="d-inline-block brand-title">Rick And Morty</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarRickYMorty;
