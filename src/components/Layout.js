import { Outlet } from "react-router-dom";
import {Container} from "react-bootstrap";

const Layout = () => {
    return(
        <Container fluid className='p-5' id="container">
            <Outlet/>
        </Container>
    )
}

export default Layout;