import Sos_Image from "../../assets/sos_image.png";

const Header = ({title}) =>{
    return (
    <section className="dashboard_header">
        <h1>{title}</h1>
        <div className="button-section">
            <button className="rounded p-2 button-main">Message</button>
        </div>
        <img src={Sos_Image} alt="Sos Image"/>
    </section>  
    )
}

export default Header;