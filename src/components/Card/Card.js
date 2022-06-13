import './Card.css';

import {Link} from "react-router-dom";
import dot_menu_image from "../../assets/Group 566_4@3x.png";

const Card = () => {
    const userList = ["Abcd","asd","fdf"];
    return (
        <section className="rounded shadow-sm bg-white dashboard_left">
            <ul className="Card nav nav-tabs" role="tablist" >
                <li className="nav-item"><Link to="" className="nav-link active" id="home-tab" data-toggle="tab" 
                aria-controls="home" aria-selected="true" >Staff</Link></li>
                <li className="nav-item" id="staff-tab" data-toggle="tab" href="#profile" role="tab" 
                aria-controls="staff" aria-selected="false" ><Link to="" className="nav-link">Employees</Link></li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-2 pt-5  bg-white">
                    {userList.map((element) =>
                        <div className="tab-item content_item rounded p-2 mb-2">
                            <div className='profile-generator'>F</div>
                            <p className='mb-0'>{element} </p>
                            <img src={dot_menu_image} className="dot-image" alt="menu icon"/>
                        </div>
                    )}
                </div>   
            </div>
        </section>
    )
}

export default Card;