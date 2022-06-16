import {Tab,Tabs} from "react-bootstrap";
import { useState,useEffect} from 'react';

import './Card.css';
import {user_items} from './UserList.js';
import dot_menu_image from "../../assets/Group 566_4@3x.png";


//This component returns user by type as a list item
const ListItem = ({name, type, desiredType,count}) => {
    if(type === desiredType){
        return (<div className="tab-item content_item rounded np-0">
            <div className='profile-generator'>{name[0]}</div>
                <p className='mb-0'>{name}</p>
            <img src={dot_menu_image} className="dot-image" alt="menu icon"/>
        </div>)  
    }
    else{
        return null;
    }
}


const Card = ({style,data,updateData}) => {
    const [count, setCount] = useState(1);

    return (
        <section className={"rounded shadow-sm bg-white dashboard_left "+style}>
            <Tabs defaultActiveKey="staff" className="mb-3">
                <Tab eventKey="staff" title="Staff">
                    {data.map((element) =>
                        <ListItem name = {element.name} 
                        type="employee" desiredType= "employee" count={count}/>
                    )}                
                </Tab>
                <Tab eventKey="employee" title="Employee">
                    {user_items.map((element) =>
                        <ListItem name = {element.name} type={element.type} 
                        desiredType= "employee" key={element.key}/>
                    )}
                </Tab>
            </Tabs>
        </section>
    )
}

export default Card;

