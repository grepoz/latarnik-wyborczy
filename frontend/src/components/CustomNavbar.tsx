import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ApplicationRoutes from "../models/enums/ApplicationRoutes";
const CustomNavbar: React.FC = () => {

    let defaultRouting = process.env.REACT_APP_DEFAULT_ROUTING_PATH || '';
    if(defaultRouting !== ''){
        defaultRouting = defaultRouting + '/';
    }

    const getNewUrl = (route: string) => window.origin + "/" + defaultRouting + route;

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href={getNewUrl(ApplicationRoutes.HOME)}>Test</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href={getNewUrl(ApplicationRoutes.ABOUT)}>O latarniku</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href={getNewUrl(ApplicationRoutes.CREATORS)}>Twórcy</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href={getNewUrl(ApplicationRoutes.ALGORITHM)}>Algorytm</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href={getNewUrl(ApplicationRoutes.FAQ)}>Algorytm</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;