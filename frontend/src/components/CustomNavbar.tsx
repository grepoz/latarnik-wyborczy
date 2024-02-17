import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ApplicationRoutes from "../models/enums/ApplicationRoutes";

type CustomNavbarProps = {
    onRouteChange: (currentRoute: string) => void;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({onRouteChange}) => {

    const updateView = (routing: string) => {

        const enumValues = Object.values(ApplicationRoutes);

        for (const value of enumValues) {
            if (routing === value) {
                onRouteChange(value);
                return;
            }
        }
        onRouteChange(ApplicationRoutes.HOME);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" onClick={() => updateView(ApplicationRoutes.HOME)}>Test</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" onClick={() => updateView(ApplicationRoutes.ABOUT)}>O latarniku</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" onClick={() => updateView(ApplicationRoutes.CREATORS)}>Twórcy</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" onClick={() => updateView(ApplicationRoutes.ALGORITHM)}>Algorytm</Nav.Link>
                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" onClick={() => updateView(ApplicationRoutes.FAQ)}>Algorytm</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;