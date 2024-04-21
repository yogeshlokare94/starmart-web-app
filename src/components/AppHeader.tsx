import {Container, Nav, Navbar} from "react-bootstrap";

const AppHeader = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Starmart</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Customers</Nav.Link>
                    <Nav.Link href="#pricing">Users</Nav.Link>
                    <Nav.Link href="#pricing">Items</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default  AppHeader;