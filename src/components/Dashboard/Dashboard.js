import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import Card from "../Card/Card";
import Map from "../Map/Map";
import History from "../History/History";
import Header from "../Header/Header";

import axios from '../../api/axios';


import { useState,useEffect} from 'react';
import {Navigate} from 'react-router-dom';


const Dashboard =() =>{
    const [mapStyle, setMapStyle] = useState('map-container');
    const [arrowStyle, setArrowStyle] = useState('map-arrow');
    const [arrowTextStyle, setArrowTextStyle] = useState('d-none');
    const [historyContainerStyle, sethistoryContainerStyle] = useState('');
    const [cardStyle, setCardStyle] = useState('');
    const [cardData, setCardData ] = useState([]);
    const [historyData, setHistoryData ] = useState([]);
    const [historyDataId, setHistoryDataId ] = useState(1);
    const [isDataLoaded, setIsDataLoaded] = useState(true);


    useEffect(() => {
        getCardData();
    },[]);

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


    const access_token = localStorage.getItem('access_token');

    //Get users list
    const getCardData = async () =>{
        await axios.get('/users', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then((res) => {
            setCardData(res.data);
        })
        .catch((error) => {
            alert("Error Loading Data");
            setIsDataLoaded(false);
        });
    };

    //Check if access token exists
    if(!access_token || !isDataLoaded){
        return (
            <Navigate to="/"/>            
        )
    }

    //Get user logs
    const getHistoryData = async (id) =>{
        await axios.get(`/user/${id}/logs`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then((res) => {
            setHistoryData(res.data);
            console.log(historyData);
        })
        .catch((error) => {
            console.error(error);
        });
    };



    return(
    <section className="dashboard_container">
        <NavBar/>
        <Header title="Monitor"/>
        <Card style={cardStyle} data={cardData} updateData = {setHistoryDataId}/>
        <Map handleClick = {handleClick} map = {mapStyle} arrow = {arrowStyle} text={arrowTextStyle}/>  
        <History username="Jason Burnette" style={historyContainerStyle}/>      
    </section>
    )
}

export default Dashboard;