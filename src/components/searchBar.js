import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "../styles/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search character . . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <i class="fas fa-search searchIcon"></i> */}
        <SearchIcon className="searchIcon" />
      </div>
      <div>
        <Container>
          <Row>
            {Object.keys(data).length !== 0 ? (
              data
                .filter((character) => {
                  if (searchTerm === "") {
                    return character;
                  } else if (
                    character.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return character;
                  }
                })
                .map((character, index) => {
                  return (
                    <Col key={index}>
                      <Card
                        className="mt-4 mb-4"
                        key={index}
                        style={{ width: "18rem" }}
                      >
                        <Card.Img variant="top" src={character.image} />
                        <Card.Body>
                          <Card.Title>{character.name}</Card.Title>
                          <Card.Text>...</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>
                            Status: {character.status}
                          </ListGroupItem>
                          <ListGroupItem>
                            Species: {character.species}
                          </ListGroupItem>
                          <ListGroupItem>{character.origin.name}</ListGroupItem>
                        </ListGroup>
                      </Card>
                    </Col>
                  );
                })
            ) : (
              <li>Loading</li>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchBar;
