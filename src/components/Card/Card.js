import {Tab,Tabs} from "react-bootstrap";

import './Card.css';
import {user_items} from './UserList.js';
import dot_menu_image from "../../assets/Group 566_4@3x.png";
import axios from '../../api/axios';


//This component returns user by type as a list item
const ListItem = ({name, type, desiredType}) => {
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

const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImFjaGFsYSIsImV4cCI6MTY1NTMxNjg0MCwiZW1haWwiOiJhY2hhbGFAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTY1NTMxMzI0MH0.ekwcSvYPo7MGXDPSObHPe6m3OWLujwPwahO6z9A_kac'

const resp = axios.get('/users', {
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})


const Card = ({style}) => {
    
    return (
        <section className={"rounded shadow-sm bg-white dashboard_left "+style}>
            <Tabs defaultActiveKey="staff" className="mb-3">
                <Tab eventKey="staff" title="Staff">
                    {user_items.map((element) =>
                        <ListItem name = {element.name} 
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