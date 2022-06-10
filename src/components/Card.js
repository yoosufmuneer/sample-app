import { Tab } from "bootstrap";

import dot_menu_image from "../assets/Group 566_4@3x.png";

const Card = () => {
    const userList = ["Abcd","asd","fdf"];
    return (
        <section className="rounded rounded shadow-sm  bg-white" style={{gridColumn:"2/5", gridRow:"2/-2"}}>
            <ul className="Card nav nav-tabs" role="tablist" >
                <li style={{flexGrow:1, borderBottom: "0.3em solid #ff1149",}} className="nav-item"><a class="nav-link active" id="home-tab" data-toggle="tab" 
                aria-controls="home" aria-selected="true" >Staff</a></li>
                <li style={{flexGrow:1,}} className="nav-item" id="staff-tab" data-toggle="tab" href="#profile" role="tab" 
                aria-controls="staff" aria-selected="false" ><a class="nav-link">Employees</a></li>
            </ul>
            <p className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-2 pt-5  bg-white">
                    {userList.map((element) =>
                        <p style={{padding:"0% 5% 0% 5%", border:"1px solid gray"}}>
                            <img src=""/>
                            {element} 
                            <img src={dot_menu_image} style={{width:"1%"}}/>
                        </p>
                    )}
                </div>   
            </p>
        </section>


    )
}

export default Card;