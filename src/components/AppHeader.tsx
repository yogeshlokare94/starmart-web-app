import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const AppHeader = () => {
    const navigator = useNavigate();

    function goToHome(){
        navigator("/");
    }

    const goToCustomers = () => {
        navigator("/customers")
    }

    const goToUsers = () => {
        navigator("/users");
    }

    const goToItems = () => {
        navigator("/items");
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={goToHome}>Starmart</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={goToHome} >Home</Nav.Link>
                    <Nav.Link onClick={goToCustomers}>Customers</Nav.Link>
                    <Nav.Link onClick={goToUsers}>Users</Nav.Link>
                    <Nav.Link onClick={goToItems}>Items</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default  AppHeader;