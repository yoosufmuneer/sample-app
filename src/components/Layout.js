import { Outlet } from "react-router-dom";
import {Container} from "react-bootstrap";

const Layout = () => {
    return(
        <Container fluid id="container">
            <Outlet/>
        </Container>
    )
}

export default Layout;