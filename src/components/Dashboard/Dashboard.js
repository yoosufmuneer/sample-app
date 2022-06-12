import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import Card from "../Card/Card";
import Map from "../Map/Map";
import History from "../History/History";

import Sos_Image from "../../assets/sos_image.png";

const Dashboard =() =>{
    return(
    <section className="dashboard_container">
        <NavBar/>
        <section className="dashboard_header">
            <h1>Monitor</h1>
            <button className="rounded p-2 button_main">Message</button>
            <img src={Sos_Image}/>
        </section>
        <Card/>
        <Map/>  
        <History/>      
    </section>
    )
}

export default Dashboard;