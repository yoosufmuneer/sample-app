import { Container } from 'react-bootstrap';

import up_arrow_image from '../assets/Path 86@3x.png';
import plus_image from '../assets/plus_button.png';
import minus_image from '../assets/minus_button.png';

const Map = () => {
    return(
    <Container className="rounded shadow-sm" style={{gridColumn: "5/-1", gridRow:"2/4", padding:"1vw", backgroundColor:"white", width:"90%"}} >
            <div className='map'>
                <img src={plus_image} className="map_content plus" />
                <img src={minus_image}  className="map_content"/>
                <img src={up_arrow_image} className="map_arrow"/>
            </div>

    </Container>
    )
}

export default Map;