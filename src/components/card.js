import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CardCharacter = ({ index, character }) => {
  return (
    <>
      <Card className="mt-4 mb-4" key={index} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Status: {character.status}</ListGroupItem>
          <ListGroupItem>Species: {character.species}</ListGroupItem>
          <ListGroupItem>{character.origin.name}</ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
};

export default CardCharacter;
