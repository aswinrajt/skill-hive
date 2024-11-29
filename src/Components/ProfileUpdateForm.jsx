import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function ProfileUpdateForm({ show, handleClose, userProfile, updateProfile }) {
  const [bio, setBio] = useState(userProfile.bio || '');
  const [profilePicture, setProfilePicture] = useState(userProfile.profilePicture || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass updated data to the parent
    updateProfile({ bio, profilePicture });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="profilePicture" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group controlId="bio" className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileUpdateForm;
