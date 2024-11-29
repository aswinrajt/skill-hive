import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Tooltip, OverlayTrigger, Spinner, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faCalendarAlt, faComments, faDatabase, faChartPie } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css';

function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState([]);

  const features = [
    { title: "Manage Users", description: "Manage user accounts", icon: faUserShield, route: "/mnguser" },
    { title: "Moderate Events", description: "Review and moderate events", icon: faCalendarAlt, route: "/admin/moderate-events" },
    { title: "Manage Feedback", description: "View and respond to feedback", icon: faComments, route: "/admin/manage-feedback" },
    { title: "Database Management", description: "Oversee and maintain the database", icon: faDatabase, route: "/admin/manage-database" },
    { title: "Analytics Dashboard", description: "Analyze site activity and trends", icon: faChartPie, route: "/admin/analytics" },
  ];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
      setRecentActivities([
        "User John Doe registered",
        "Event 'React Workshop' created by Jane",
        "Feedback received for 'Node.js Basics'",
        "Database backup completed",
        "50 new users joined this week",
      ]);
    }, 1500);
  }, []);

  return (
    <Container className="admin-dashboard mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          <Col md={12}>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} className="mb-4" key={index}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{feature.description}</Tooltip>}
                  >
                    <Card className="feature-card shadow-sm h-100">
                      <Card.Body className="d-flex align-items-center">
                        <FontAwesomeIcon icon={feature.icon} size="3x" className="feature-icon mr-3 pe-3" />
                        <div>
                          <Card.Title>{feature.title}</Card.Title>
                          <Button variant="outline-primary" href={feature.route} className="mt-2">
                            Go to {feature.title}
                          </Button>
                        </div>
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
      )}
    </Container>
  );
}

export default AdminDashboard;
