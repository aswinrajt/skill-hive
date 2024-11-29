import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useContext } from 'react';
import {Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { editEventApi } from '../services/allApi';
import { editeventResponseContext } from '../Context/Contextapi';

function EditEvent({events}) {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        const{editResponse,setEditResponse}=useContext(editeventResponseContext)



        const [event,setEvent]=useState({
            title:"",date:"",desc:""
        })

        const[data,setData]=useState({...events})

        
  const handleEdit = async () => {

    console.log(data)

    const { title, date, desc } = data
    if (!title || !date || !desc) {
      toast.warning("Invalid inputs")

    }
    else {

      const header = {
        "Content-Type": "application/json",
        "Authorization": `Token ${sessionStorage.getItem('teacherToken')}`
      }

      const body = { title, date ,desc }

      const res = await editEventApi(body, data._id, header)
      console.log(res)
      if (res.status == 200) {
        toast.success("Project updated!!")
        handleClose()
        setEditResponse(res)


      }
      else {
        toast.warning("Updation failed!!!")
      }


    }
  }

     
      
    
  return (
    <>
    

    <Button variant="primary me-5" onClick={() => handleShow()}>Edit</Button>



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

                defaultValue={data?.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                placeholder="Enter event title"
              />
            </Form.Group>
            <Form.Group controlId="formEventDate" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                defaultValue={data?.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEventDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                defaultValue={data?.desc}
                onChange={(e) => setData({ ...data, desc: e.target.value })}
                placeholder="Enter event description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>Add Event</Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default EditEvent