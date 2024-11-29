import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    
    
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/Landing">
      <i className="fa-solid fa-scroll-torah" flip style={{color: "#2e0005",}} />
      {' '}
        Skill Hive
      </Navbar.Brand>
    </Container>
  </Navbar>
  
  
  </>
  )
}

export default Header