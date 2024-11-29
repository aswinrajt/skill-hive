import React, { useState, useEffect,useContext} from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './ManageEvent.css';
import AddEvent from '../Components/AddEvent';
import EditEvent from '../Components/EditEvent';
import { deleteEventApi, editEventApi, getEventApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { editeventResponseContext,addeventResponseContext } from '../Context/Contextapi';

function ManageEvent() {

  const [data, setData] = useState([])

  const {addResponse,setAddResponse}=useContext(addeventResponseContext)
  const {editResponse,setEditResponse}=useContext(editeventResponseContext)



  useEffect(() => {
    getData()
  }, [addResponse,editResponse])




  const getData = async () => {
    const header = {
      'Content-type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('teacherToken')}`
    }
    const res = await getEventApi(header)
    console.log(res)
    if (res.status == 200) {
      setData(res.data)
      // addResponse(res)
    }
    else {
      console.log(res)
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handledelete = async (id) => {
    const header = {
      'Content-type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const res = await deleteEventApi(id, header)
    if (res.status == 200) {
      toast.success("Project deleted!!")

      getData()
    }
    else {
      toast.error("Something went wrong!!")
    }

  }









  return (
    <Container className="manage-event mt-5">
      <header className="text-center mb-4">
        <h2>Manage Events</h2>
        <p>Create, update, or delete events for your learners.</p>
        <AddEvent />
      </header>

      <Row>
        {data.map((item) => (
          <Col md={6} lg={4} key={item.id} className="mb-4">
            <Card className="event-card">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Text>{item.desc}</Card.Text>
                <EditEvent events={item} />
                <Button variant="danger" onClick={() => handledelete(item._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ManageEvent;
