import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './Landing.css';
import LandingPageNavbar from '../Components/LandingPageNavbar';

function Landing() {
  return (

<>
    <LandingPageNavbar/>
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light d-flex flex-column justify-content-center">
        <Container>
          <h1 className="display-3">SkillHive</h1>
          <p className="lead">Connect, Learn, and Share Knowledge with the Community</p>
          <Button variant="primary" size="lg" href="/auth">
            Get Started
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section text-center py-5">
        <Container>
          <h2>About SkillHive</h2>
          <p className="lead">
            SkillHive is a vibrant community where individuals come together to share knowledge, learn new skills, and grow collectively.
            Join as a Mentor to teach and share your skills, or as a Learner to expand your horizons and improve yourself!
          </p>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our Features</h2>
          <Row>
            <Col md={4}>
              <Card className="feature-card text-center">
                <Card.Body>
                  <Card.Title>Organize Skill Events</Card.Title>
                  <Card.Text>
                    Mentors can create and host skill events, helping learners gain hands-on experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card text-center">
                <Card.Body>
                  <Card.Title>Chat with Experts</Card.Title>
                  <Card.Text>
                    Learners and Mentors can engage in real-time conversations for instant feedback and guidance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card text-center">
                <Card.Body>
                  <Card.Title>Track Your Progress</Card.Title>
                  <Card.Text>
                    Keep an eye on your learning journey with personalized progress tracking and achievements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Users Say</h2>
          <Carousel>
            <Carousel.Item>
              <p className="testimonial-text">
                "SkillHive helped me find the best mentors to learn coding skills that transformed my career!"
              </p>
              <h5>- Alex T.</h5>
            </Carousel.Item>
            <Carousel.Item>
              <p className="testimonial-text">
                "As a mentor, SkillHive has been an amazing platform to connect with enthusiastic learners."
              </p>
              <h5>- Sarah W.</h5>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section py-4 text-center text-light">
        <Container>
          <Row>
            <Col>
              <p>© 2024 SkillHive. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
    </>
  );
}

export default Landing;
