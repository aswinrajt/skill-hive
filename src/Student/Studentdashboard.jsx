import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import ProfileUpdateForm from '../Components/ProfileUpdateForm';
import './StudentDashboard.css';

function StudentDashboard() {
  const [userName, setUserName] = useState(sessionStorage.getItem('username'));
  const [bio, setBio] = useState('This is your default bio.');
  const [profilePicture, setProfilePicture] = useState('');
  const [showProfileForm, setShowProfileForm] = useState(false);

  const [enrolledEvents, setEnrolledEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [progress, setProgress] = useState(90);

  useEffect(() => {
    // Simulate fetching user data
    setEnrolledEvents([
      { id: 1, title: 'React Basics', date: 'Nov 5, 2024' },
      { id: 2, title: 'Advanced JavaScript', date: 'Nov 12, 2024' },
    ]);
    setUpcomingEvents([
      { id: 3, title: 'Node.js for Beginners', date: 'Nov 18, 2024' },
      { id: 4, title: 'MongoDB Essentials', date: 'Nov 25, 2024' },
    ]);
  }, []);

  const handleProfileUpdate = ({ bio, profilePicture }) => {
    setBio(bio);
    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(profilePicture);
    }
  };

  return (
    <Container className="student-dashboard mt-5">
      <Row className="mb-4">
        {/* Introduction Card */}
        <Col md={6}>
          <Card className="dashboard-card intro-card text-center">
            <Card.Body>
              <Card.Title>Welcome Back, {userName}!</Card.Title>
              <Card.Text>Welcome to SkillHive! </Card.Text>
              <Button
                variant="secondary"
                className="mb-2"
                onClick={() => setShowProfileForm(true)}
              >
                Update Profile
              </Button>
              <Button variant="primary" href="/studentevent">
                Explore More Events
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Profile Picture Card */}
        <Col md={6}>
          <Card className="dashboard-card profile-card text-center">
            <Card.Body>
              <Card.Title>Your Profile</Card.Title>
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="img-fluid rounded-circle profile-picture mb-3"
                />
              ) : (
                
                <div className="placeholder-profile rounded-circle mb-3">
                  <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                alt="Profile"
                className="img-fluid rounded-circle profile-picture mb-3"
              />
              <Card.Text>{bio}</Card.Text>
                </div>
              )}
              {/* <Button variant="secondary" onClick={() => setShowProfileForm(true)}>
                Edit Profile
              </Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        {/* Progress Card */}
        <Col md={6}>
          <Card className="dashboard-card text-center progress-card">
            <Card.Body>
              <Card.Title>Your Learning Progress</Card.Title>
              <ProgressBar now={progress} label={`${progress}%`} animated />
              <p className="mt-3">You're {progress}% complete with your current goals!</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Enrolled Events Card */}
        <Col md={6}>
          <Card className="dashboard-card enrolled-events-card">
            <Card.Body>
              <Card.Title>Enrolled Events</Card.Title>
              {enrolledEvents.length > 0 ? (
                enrolledEvents.map((event) => (
                  <div key={event.id} className="event-item">
                    <strong>{event.title}</strong> <span>on {event.date}</span>
                  </div>
                ))
              ) : (
                <p>No enrolled events yet.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        {/* Upcoming Events Card */}
        <Col md={6}>
          <Card className="dashboard-card upcoming-events-card">
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event.id} className="event-item">
                    <strong>{event.title}</strong> <span>on {event.date}</span>
                  </div>
                ))
              ) : (
                <p>No upcoming events at the moment.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Profile Update Form Modal */}
      <ProfileUpdateForm
        show={showProfileForm}
        handleClose={() => setShowProfileForm(false)}
        userProfile={{ bio, profilePicture }}
        updateProfile={handleProfileUpdate}
      />
    </Container>
  );
}

export default StudentDashboard;
