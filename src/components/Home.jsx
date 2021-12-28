import React, { Component } from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const myStyle={
    margin:"20px",
    fontSize:"30px",
    fontWeight:"bold",
    textDecoration:"none",
    
}

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{height:"90px", marginBottom:"60px"}}>
                        <Container>
                        <Navbar.Brand to="/">JK</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" style={myStyle}>Cards</Link>
                            <Link to="/validation" style={myStyle}>Form Validation</Link>
                        </Nav>
                        </Container>
                </Navbar>
            </div>
        )
    }
}

export default Home;
