import { Container } from 'react-bootstrap';

import map_image from '../assets/80-cool-grey@3x.png';
import up_arrow_image from '../assets/Path 86@3x.png';
import plus_image from '../assets/Group 572@3x.png';
import minus_image from '../assets/Group 571@3x.png';

const Map = () => {
    return(
    <Container style={{gridColumn: "5/-1", gridRow:"2/3", padding:"1vw", backgroundColor:"white"}} >
            <img src={plus_image} style={{maxWidth:"100%", maxHeight:"100%"}}/>
            <img src={minus_image} style={{maxWidth:"100%", maxHeight:"100%"}}/>
            <img src={up_arrow_image} style={{maxWidth:"10%", maxHeight:"10%"}}/>
            <img src={map_image} style={{maxWidth:"90%", maxHeight:"100%"}}/>
    </Container>
    )
}

export default Map;