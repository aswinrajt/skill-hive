import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './ManageEvents.css';
import { getAllEventApi } from '../services/allApi';



function ManageEvents() {
  const [availableEvents, setAvailableEvents] = useState([]);

  
  useEffect(()=>{
    getData()
  },[])

  
  const getData=async()=>{
    const header={
      'Content-type':'application/json',
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    }
    const res=await getAllEventApi(header)
    console.log(res)
    if(res.status==200){
      setAvailableEvents(res.data)
      // addResponse(res)
    }
    else{
      console.log(res)
    }
  }




  const [enrolledEvents, setEnrolledEvents] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleEnroll = (event) => {
    if (!enrolledEvents.some((e) => e.id === event.id)) {
      setEnrolledEvents([...enrolledEvents, event]);
    }
  };

  const handleShowDetails = (event) => {
    setCurrentEvent(event);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setCurrentEvent(null);
  };




  return (
    <Container className="user-event-management mt-5">
      <header className="text-center mb-5">
        <h2>Available Events</h2>
        <p>Browse and enroll in events to expand your knowledge.</p>
      </header>

      <Row>
        {availableEvents.map((event) => (
          <Col md={6} lg={4} key={event.id} className="mb-4">
            <Card className="event-card">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.desc.slice(0, 50)}...</Card.Text>
                <Button variant="info" onClick={() => handleShowDetails(event)}>View Details</Button>{' '}
                <Button
                  variant="success"
                  onClick={() => handleEnroll(event)}
                  disabled={enrolledEvents.some((e) => e.id === event.id)}
                >
                Enroll
                </Button>
                <Button className='mt-2' variant='dark'>Talk With Tutor <i className="fa-solid fa-comments" /></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <hr className="my-5" />

      <section>
        <header className="text-center mb-4">
          <h3>My Enrolled Events</h3>
        </header>
        <Row>
          {enrolledEvents.length > 0 ? (
            enrolledEvents.map((event) => (
              <Col md={6} lg={4} key={event.id} className="mb-4">
                <Card className="event-card enrolled-event-card">
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">You have not enrolled in any events yet.</p>
          )}
        </Row>
      </section>

      {/* Modal for Event Details */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{currentEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Date:</strong> {currentEvent?.date}</p>
          <p>{currentEvent?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
          {!enrolledEvents.some((e) => e.id === currentEvent?.id) && (
            <Button variant="success" onClick={() => { handleEnroll(currentEvent); handleCloseDetails(); }}>
              Enroll in this Event
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ManageEvents;
