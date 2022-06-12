import "./NavBar.css";

import dashboard_icon from '../../assets/Group 537@3x.png';
import building_icon from '../../assets/Group 538@3x.png';
import camera_icon from '../../assets/Group 563@3x.png';
import people_icon from '../../assets/Group 548@3x.png';
import briefcase_icon from '../../assets/Group 549@3x.png';
import search_icon from '../../assets/Group 555@3x.png';
import tb_icon from '../../assets/Group 565@3x - Copy.png';


const NavBar =() =>{
    return(
    <aside>
        <div className='menu_item active'>
            <img src={dashboard_icon}/>
        </div>
        <div className='menu_item' >
            <img src={building_icon}/>
        </div>
        <div className='menu_item'>
            <img src={camera_icon}/>
        </div>
        <div className='menu_item'>
            <img src={people_icon}/>
        </div>
        <div className='menu_item'>
            <img src={briefcase_icon}/>
        </div>
        <div className='menu_item'>
            <img src={search_icon}/>
        </div>
        <div className='menu_item last_child'>
            <img src={tb_icon}/>
        </div>

    </aside>
    )
}

export default NavBar;