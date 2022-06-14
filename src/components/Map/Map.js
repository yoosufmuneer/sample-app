import "./Map.css";
import { useState} from 'react';
import { Container } from 'react-bootstrap';

import up_arrow_image from '../../assets/Path 86@3x.png';
import plus_image from '../../assets/plus_button.png';
import minus_image from '../../assets/minus_button.png';

const Map = ({map, text, arrow, handleClick}) => {
    
    const [mapSize, setMapSize] = useState(1000);

    //Updates Map Size for zoom functions to work 
    var style = {
        backgroundSize: mapSize+"px",
    }
 
    return(
    <Container className={'rounded shadow-sm bg-white dashboard_right '+ map} >
            <div className='map' style={style}>
                <button className="btn btn-outline-danger reset-map" onClick={()=>setMapSize(1000)}>Reset Map</button>
                <img src={plus_image} className="map_content plus" onClick={()=>setMapSize(mapSize+10)} alt="Zoom In Icon"/>
                <img src={minus_image}  className="map_content" onClick={()=>setMapSize(mapSize-10)} alt="Zoom Out Icon"/>
                <p className={'bold center-align '+text}>Live Location Map Here</p>
                <img src={up_arrow_image} className={arrow} onClick={handleClick} alt="Arrow up Icon"/>
            </div>

    </Container>
    )
}

export default Map;