import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const AdminAuth = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Admin logged in!");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card style={{ width: "400px" }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Admin Login</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="adminEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="adminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <small>© 2024 SkillHive</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default AdminAuth;
