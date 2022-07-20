import * as React from 'react';
import './Home.css';
import About from '../About/About';

export default function Home() {
    return (
        <div className='home'>
            <div className='bg-img'>
            </div>
            <div className='bg-text'>Carbon Calc
            <div className='bg-detail-text'> Greenhouse gases from transportation account for 27% of total US greenhouse gas emissions, check how much carbon your trip takes! </div>
            </div>
            <About />
        </div>

    ); 
}