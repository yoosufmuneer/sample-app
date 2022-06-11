import NavBar from "../NavBar";
import Card from "../Card";
import Map from "../Map";
import History from "../History";

import Sos_Image from "../../assets/Group 323@3x.png";

const Dashboard =() =>{
    return(
    <section className="dashboard_container">
        <NavBar/>
        <section className="dashboard_header" style={{gridColumn:"2/-1",display:"grid",gridTemplateColumns:"repeat(12,1fr)",
        gridTemplateRows:"100%", alignItems: "center", borderBottom: "0.1em solid black"}}>
            <h1 style={{fontWeight:"bold", fontSize:"1.6em",display:"inline"}}>Monitor</h1>
            <button className="rounded p-2 button_main" style={{gridColumn:"-3/-3"}}>Message</button>
            <img src={Sos_Image} style={{width:"40%",gridColumn:"-1/-1"}}/>
        </section>
        <Card/>
        <Map/>  
        <History/>      

    </section>
    )
}

export default Dashboard;