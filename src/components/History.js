import { Container } from 'react-bootstrap';
import filter_image from '../assets/Group 618@3x.png';

const History = () => {
    return(
        <Container className="rounded shadow-sm history dashboard_right" >
            <ul>
                <span className='mr-2'><span style={{fontWeight:"bold",marginRight:"1vw"}}>History</span>(Jason Burnette)</span>
                <li>All</li>
                <li>Location</li>
                <li>Message</li>
                <li>Alert</li>
                <li><img className="filter_image" src={filter_image}/></li>
            </ul>
            <hr/>
            <section className='history_content'>
                <ul className='history_content_headings'>
                    <li>Date</li>
                    <li>Alert View</li>
                    <li>Time</li>
                    <li>Location</li>
                </ul>
                <div className="history_content_item rounded">
                    <p>adsdsad</p>
                    <p>adsdsad</p>
                    <p>adsdsad</p>
                    <p>adsdsad</p>
                </div>
            </section>
        </Container>
    )
}

export default History;