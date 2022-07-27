import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink } from "react-router-dom";
import Contact from './Contact';
import './styles/Header.css';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Bank Logo"
              src="https://img.favpng.com/19/25/12/bank-icon-icons-money-icon-png-favpng-nYWavaFxxLEHGbhfa2sktj7y7.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span id='title_name' style={{fontFamily: "serif", fontSize: "1.5em"}}>My Bank</span>
          </Navbar.Brand>

          <Nav className="me-auto" style={{marginLeft: "420px"}}> 
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/send-funds">Send Funds</Nav.Link>
            <Nav.Link href="/transaction-history">Transaction History</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Profile</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;