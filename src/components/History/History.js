import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import filter_image from '../../assets/Group 618@3x.png';

import "./History.css";

const History = () => {
    const userList = {"history":[    
        {"date":"12/May/2021", "alert":"off", "time":"2:12 p.m.", "location":"Colombo"},    
        {"date":"13/Jun/2022", "alert":"on","time":"2:15 p.m.", "location":"Dehiwala"},  
        {"date":"13/Jul/2022", "alert":"on", "time":"3:45 p.m.","location":"Jaffna"},    
        {"date":"12/Jan/2023", "alert":"off", "time":"4:30 p.m.","location":"Colombo"}   
    ]};  
    const newList =userList.history;
    return(
        <Container className="rounded shadow-sm bg-white history dashboard_right" >
            <ul className="history_header">
                <span className='history_span'><span className="bold">History</span>(Jason Burnette)</span>
                <div className='vr'></div>
                <li><Link to="/dashboard/" className='text-decoration-none text-black history_link'>All</Link></li>
                <li><Link to="" className='text-decoration-none text-black history_link'>Location</Link></li>
                <li><Link to="" className='text-decoration-none text-black history_link'>Message</Link></li>
                <li><Link to="" className='text-decoration-none text-black history_link'>Alert</Link></li>
                <li className="text-right"><img className="filter_image" src={filter_image}/></li>
            </ul>
            <hr/>
            <section className='history_content'>
                <ul className='history_content_headings bold'>
                    <li>Date</li>
                    <li>Alert View</li>
                    <li>Time</li>
                    <li>Location</li>
                </ul>
              
                {newList.map((element) =>
                    <div className='history_content_item rounded'>
                        <p>
                            {element["date"]}
                        </p>
                        <p>
                            {element["alert"]}
                        </p>
                        <p>
                            {element["time"]}
                        </p>
                        <p>
                            <Link to="{element['location']}" className='text-decoration-none '>Live Map</Link>
                        </p>
                    </div>
                )}
            </section>
        </Container>
    )
}

export default History;