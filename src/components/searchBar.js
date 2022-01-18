import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "../styles/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Card from "./card.js";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search character . . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm === "" ? (
          <SearchIcon className="searchIcon" />
        ) : (
          <ClearIcon className="searchIcon" onClick={() => setSearchTerm("")} />
        )}
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {filter.length === "" ? "Status" : filter}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter("alive")}>
            Alive
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("dead")}>Dead</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("unknown")}>
            Unknown
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
                      <Card index={index} character={character} />
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
