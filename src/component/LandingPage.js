import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import visakhapatnam from "../images/visakhapatnam.jpg"
import araku from "../images/araku.jpg"
import tirupathi from "../images/tirupathi.jpg"
import srikakulam from "../images/srikakulam.jpg"
import vijayawada from "../images/vijayawada.jpg"
import godavari from "../images/godavari.jpg"
import vijayanagaram from "../images/vijayanagaram.jpg"
import kadapa from "../images/kadapa.jpg"

function LandingPage() {
  const navigate = useNavigate();
  // State to manage hover state for each link
  const [hoveredLink, setHoveredLink] = useState(null);

  const places = [
     {id:1, name: "visakhapatnam", img: visakhapatnam },
    {id:2,name: "Tirupathi", img: tirupathi },
    { id:3,name: "Srikakulam", img: srikakulam },
     { id:4, name: "Araku", img:araku},
  { id:5,name: "vijayawada", img: vijayawada},
    { id:6,name: "godavari", img: godavari},
    {id:7, name: "Vizianagaram", img: vijayanagaram },
    {id:8, name: "Kadapa", img: kadapa },
  ];

  // Function to determine the style based on hover state
  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#df39a7ff" : "white", // Change color on hover
    fontWeight: hoveredLink === linkName ? "bold" : "normal", // Add bold on hover
    transition: "color 0.3s ease, font-weight 0.3s ease", // Smooth transition
  });

  return (
    <>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#b2a8eeff" }} variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            🌍 Destination Discoveries
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              {/* Nav.Link with Hover State */}
              <Nav.Link 
                href="#home" 
                style={getNavLinkStyle("home")}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#about" 
                style={getNavLinkStyle("about")}
                onMouseEnter={() => setHoveredLink("about")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#places" 
                style={getNavLinkStyle("places")}
                onMouseEnter={() => setHoveredLink("places")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Places
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                style={getNavLinkStyle("contact")}
                onMouseEnter={() => setHoveredLink("contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact
              </Nav.Link>
              <Button
                style={{ backgroundColor: "#e92cd9ff", border: "none" }}
                className="ms-3"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Linear Gradient - Rest of the component remains the same */}
      <section
        id="home"
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          background: " url('https://i.pinimg.com/736x/84/70/94/847094a5d2df67f4fc7a7a6b77bcfe7b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "white",
          position: "relative",
        }} 
      >
        <Container style={{ position: "relative", zIndex: 2 }}>
          <h1 
            className="display-3 fw-bold mb-3" 
            style={{ color: "blue" }}
          >
            Discover Beautiful Destinations
          </h1>
          <p className="lead mb-4 fs-4">
            Explore the world, relive your adventures, and find your next journey.
          </p>
          <Button
            style={{
              backgroundColor: "#ba43ffff",
              border: "none",
              fontSize: "1.2rem",
              padding: "10px 30px",
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5" style={{ background: "linear-gradient(to right, #b2dfdb, #e0f7fa)" }}>
        <Container>
          <h2 className="text-center fw-bold mb-4" style={{ color: "#00796b" }}>
            About Us
          </h2>
          <p className="text-center mx-auto w-75 fs-5" style={{ color: "#004d40" }}>
            <strong>Destination Discoveries</strong> is a travel-inspired platform
            designed for wanderers and explorers. Whether you're looking to revisit
            old memories or uncover hidden gems, we bring the world closer to you.  
            <br />
            From serene beaches to sacred temples and lush green valleys, every
            destination has a story. Start your journey with us and celebrate the
            joy of travel and discovery.
            <br/>
            Digital travel planning and exploration rely heavily on accessible and engaging web 
            platforms. Destination Explorer is a  designed to serve as an intuitive and comprehensive guide for users seeking to 
            discover, explore, and learn about famous destinations worldwide. Inspired by modern travel 
            platforms like TripAdvisor and Google Maps, the application offers seamless, data-driven 
            browsing and visualization of various points of interest through a dynamic and responsive 
            user interface. 
          </p>
        </Container>
      </section>

      {/* Places Section */}
      <section
        id="places"
        className="py-5"
        style={{ background: "linear-gradient(to bottom, #c2e7ecff, #80deea)" }}
      >
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: "#904d40" }}>
            Famous Places
          </h2>
          <Row>
            {places.map((place, index) => (
              
              <Col key={place.id} md={4} lg={3} className="mb-4 mx-auto">
                <Card className="shadow-lg border-0 rounded-4 h-100">
                  <Card.Img
                    variant="top"
                    src={place.img}
                    alt={place.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title style={{ color: "#00796b", fontWeight: "600" }}>
                      {place.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <Container className="text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#00796b" }}>
            Contact Us
          </h2>
          <p className="fs-5" style={{ color: "#004d40" }}>
            📧 Email: contact@destinationdiscoveries.com <br />
            📞 Phone: +91 98765 43210
          </p>
          <p style={{ color: "#00695c" }}>
            Follow us on social media for travel inspiration and updates!
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer
        className="text-white text-center py-3"
        style={{ backgroundColor: "#004d40" }}
      >
        © {new Date().getFullYear()} Destination Discoveries. All rights reserved.
      </footer>
    </>
  );
}

export default LandingPage;