import {Tab,Tabs} from "react-bootstrap";

import './Card.css';
import {UserList} from './UserList.js';
import dot_menu_image from "../../assets/Group 566_4@3x.png";

const ListItem = ({name, type, desiredType}) => {
    if(type == desiredType){
        return (<div className="tab-item content_item rounded p-2 m-3">
            <div className='profile-generator'>{name[0]}</div>
                <p className='mb-0'>{name}</p>
            <img src={dot_menu_image} className="dot-image" alt="menu icon"/>
        </div>)  
    }
    else{
        return null;
    }
}

const Card = () => {
    const userList = ["Abcd","asd","fdf"];
    const staffList = UserList.users;

    return (
        <section className="rounded shadow-sm bg-white dashboard_left">
            <Tabs defaultActiveKey="staff" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="staff" title="Staff">
                    {staffList.map((element) =>
                        <ListItem name = {element["name"]} type={element['type']} desiredType= "employee"/>
                    )}                
                </Tab>
                <Tab eventKey="employee" title="Employee">
                    {staffList.map((element) =>
                        <ListItem name = {element["name"]} type={element['type']} desiredType= "staff"/>
                    )}    
                </Tab>
            </Tabs>
        </section>
    )
}

export default Card;