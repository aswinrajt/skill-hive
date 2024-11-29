import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Tooltip, OverlayTrigger, ListGroup, Spinner } from 'react-bootstrap';
import './TeacherDashboard.css';

function TeacherDashboard() {
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState([]);

  const features = [
    // { title: "Create Skill Events", description: "Organize and host new events", route: "/teacher/event" },
    { title: "Manage Events", description: "View and update your events", route: "/teacher/manageevnt" },
    { title: "View Feedback", description: "Check feedback from learners", route: "/teacher/view-feedback" },
    { title: "Chat with Learners", description: "Direct messaging with learners", route: "/teacher/chat" },
    { title: "View Ratings and Comments", description: "See learner ratings and comments", route: "/teacher/ratings" },
    { title: "Update Profile", description: "Edit your profile details", route: "/teacher/profile" },
  ];

  // useEffect(() => {
  //   // Simulate data loading
  //   setTimeout(() => {
  //     setLoading(false);
  //     setRecentActivities([
  //       "New feedback on 'React Workshop'",
  //       "Event 'Node.js Basics' updated",
  //       "Learner messaged regarding 'HTML Basics'",
  //       "Profile updated successfully",
  //       "Joined chat for 'CSS Advanced Techniques'",
  //     ]);
  //   }, 1500);
  // }, []);

  return (
    <Container className="teacher-dashboard mt-5">
      <h2 className="text-center mb-4">Teacher Dashboard</h2>

    
        <Row>
          <Col md={8}>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} className="mb-4" key={index}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{feature.description}</Tooltip>}
                  >
                    <Card className="feature-card shadow-sm h-100">
                      <Card.Body>
                        <Card.Title>{feature.title}</Card.Title>
                        <Button variant="primary" href={feature.route} className="mt-2">
                          Go to {feature.title}
                        </Button>
                      </Card.Body>
                    </Card>
                  </OverlayTrigger>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm recent-activity">
              <Card.Header className="text-center font-weight-bold">Recent Activity</Card.Header>
              <ListGroup variant="flush">
                {recentActivities.map((activity, index) => (
                  <ListGroup.Item key={index}>{activity}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}

export default TeacherDashboard;
