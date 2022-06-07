import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <section className="App">
            <Outlet/>
        </section>
    )
}

export default Layout;