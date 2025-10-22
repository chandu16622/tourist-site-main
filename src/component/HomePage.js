// 
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const places = [
  { name: "Taj Mahal", location: "Agra", img: "https://source.unsplash.com/400x250/?tajmahal" },
  { name: "Eiffel Tower", location: "Paris", img: "https://source.unsplash.com/400x250/?eiffel-tower" },
  { name: "Great Wall", location: "China", img: "https://source.unsplash.com/400x250/?great-wall" },
  { name: "Machu Picchu", location: "Peru", img: "https://source.unsplash.com/400x250/?machu-picchu" },
];

function HomePage() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 text-primary fw-bold">
        ✈️ Destination Discoveries
      </h2>
      <Row>
        {places.map((place, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={place.img} alt={place.name} />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>{place.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
