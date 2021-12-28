import React, { Component } from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand to="/">JK</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" style={{marginRight:"20px", fontSize:"30px"}}>Home</Link>
                            <Link to="/validation" style={{marginRight:"20px", fontSize:"30px"}}>Form Validation</Link>
                        </Nav>
                        </Container>
                </Navbar>
            </div>
        )
    }
}

export default Home;
