import NavBar from "../NavBar";
import Card from "../Card";
import Map from "../Map";

import Sos_Image from "../../assets/Group 323@3x.png";

const Dashboard =() =>{
    return(
    <div style={{display:"grid", gridTemplateColumns:"5vw repeat(11,1fr)",gridTemplateRows:"repeat(5,20vh)",gap:"2%"}}>
        <NavBar/>
        <section style={{gridColumn:"2/-1",display:"grid",gridTemplateColumns:"repeat(12,1fr)",
        gridTemplateRows:"100%", alignItems: "center", borderBottom: "0.1em solid black", margin:"0% 2% 0% 0%"}}>
            <h1 style={{fontWeight:"bold", fontSize:"1.6em",display:"inline"}}>Monitor</h1>
            <button className="rounded p-2 button_main" style={{gridColumn:"-3/-3"}}>Message</button>
            <img src={Sos_Image} style={{width:"40%",gridColumn:"-1/-1"}}/>
        </section>
        <Card/>
        <Map/>        

    </div>
    )
}

export default Dashboard;