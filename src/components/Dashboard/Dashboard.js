import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import Card from "../Card/Card";
import Map from "../Map/Map";
import History from "../History/History";
import Header from "../Header/Header";

import { useState} from 'react';

const Dashboard =() =>{
    const [mapStyle, setMapStyle] = useState('map-container');
    const [arrowStyle, setArrowStyle] = useState('map-arrow');
    const [arrowTextStyle, setArrowTextStyle] = useState('d-none');
    const [historyContainerStyle, sethistoryContainerStyle] = useState('');
    const [cardStyle, setCardStyle] = useState('');

    let handleClick = () =>{
        // Flips Arrow from up to down & resizes map & history containers
        // Uses CSS classes with grid & rotate to achieve that
        if(mapStyle.includes('map-container-resize')){
            setMapStyle('map-container');
            setArrowStyle('map-arrow rotate-360');
            setArrowTextStyle('d-none');
            sethistoryContainerStyle('');
            setCardStyle('');
        }
        else{
            setMapStyle('map-container-resize');
            setArrowStyle('map-arrow rotate-180');
            setArrowTextStyle('');
            sethistoryContainerStyle('history-resize');
            setCardStyle('card-resize');
        }
    };

    return(
    <section className="dashboard_container">
        <NavBar/>
        <Header title="Monitor"/>
        <Card style={cardStyle}/>
        <Map handleClick = {handleClick} map = {mapStyle} arrow = {arrowStyle} text={arrowTextStyle}/>  
        <History username="Jason Burnette" style={historyContainerStyle}/>      
    </section>
    )
}

export default Dashboard;