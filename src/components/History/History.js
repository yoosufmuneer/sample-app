import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import filter_image from '../../assets/Group 618@3x.png';
import {history_items} from './HistoryList.js';
import {items} from './SortItems.js';
import "./History.css";

const History = ({style, username}) => {


    return(
        <Container className={'rounded shadow-sm bg-white history dashboard_right ' + style} >
            <div className="history_header">
                <span className='history_span'><span className="bold">History</span>({username})</span>
                <div className='vr'></div>
                <Link to="/dashboard/" className='text-decoration-none history_link'>All</Link>
                <Link to="" className='text-decoration-none history_link'>Location</Link>
                <Link to="" className='text-decoration-none history_link'>Message</Link>
                <Link to="" className='text-decoration-none history_link'>Alert</Link>
                <div className="text-right"><img className="filter_image" src={filter_image} alt="Filter Icon"/></div>
            </div>
            <hr/>
            <section className='history_content'>
                <div className='history_content_headings bold'>
                    {items.map((element) =>
                        <p>{element.name}</p>
                    )}
                </div>
              
                {history_items.map((element) =>
                    <div className='history_content_item rounded'>
                        <p className='mb-0'>
                            {element.date}
                        </p>
                        <p className='mb-0'>
                            {element.alert}
                        </p>
                        <p className='mb-0'>
                            {element.time}
                        </p>
                        <p className='mb-0'>
                            <Link to="/dashboard" className='text-decoration-none '>Live Map</Link>
                        </p>
                    </div>
                )}
            </section>
        </Container>
    )
}

export default History;