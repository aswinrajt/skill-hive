import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useContext } from 'react';
import {Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addEventApi } from '../services/allApi';
import { addeventResponseContext } from '../Context/Contextapi';


function AddEvent() {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        const{addResponse,setAddResponse}=useContext(addeventResponseContext)



        const [event,setEvent]=useState({
            title:"",date:"",desc:""
        })


        const handleAddEvent=async()=>{
            console.log(event)
            const{title,date,desc}=event
            if(!title | !date | !desc){
                toast.warning("Enter valid inputs")
            }
            else{
                const header={
                    "Content-Type":"application/json",
                    "Authorization":`Token ${sessionStorage.getItem('teacherToken')}`
                }

                const body={title,date,desc}

                const res=await addEventApi(body,header)
                console.log(res)
                if(res.status==200){
                    toast.success("Project updated!!")
                    handleClose()
                    setAddResponse(res)
                    
                }
                else{
                    toast.warning("Updation failed!!!")
                }
                 
            }

        }
      
    
  return (
    <>
    

    <Button variant="primary" onClick={() => handleShow()}>Add New Event</Button>



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                
                // value={newEvent.title}
                onChange={(e)=>setEvent({...event,title:e.target.value})}
                placeholder="Enter event title"
              />
            </Form.Group>
            <Form.Group controlId="formEventDate" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                // value={newEvent.date}
                onChange={(e)=>setEvent({...event,date:e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="formEventDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                // value={newEvent.description}
                onChange={(e)=>setEvent({...event,desc:e.target.value})}
                placeholder="Enter event description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>Add Event</Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default AddEvent