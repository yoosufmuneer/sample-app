import {Tab,Tabs} from "react-bootstrap";

import './Card.css';
import {user_items} from './UserList.js';
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

const style = {

}

const Card = () => {

    return (
        <section className="rounded shadow-sm bg-white dashboard_left">
            <Tabs defaultActiveKey="staff" className="mb-3">
                <Tab eventKey="staff" title="Staff">
                    {user_items.map((element) =>
                        <ListItem style={style}name = {element.name} 
                        type={element.type} desiredType= "employee" key={element.key}/>
                    )}                
                </Tab>
                <Tab eventKey="employee" title="Employee">
                    {user_items.map((element) =>
                        <ListItem name = {element.name} type={element.type} 
                        desiredType= "staff" key={element.key}/>
                    )}    
                </Tab>
            </Tabs>
        </section>
    )
}

export default Card;