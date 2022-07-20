import * as React from 'react';
import './Vehicles.css'
import { AiFillCar } from 'react-icons/ai'

export default function Vehicles(props) {
    return (
        
        <div className='wrapper'>
            <div className='card'>
                <div className='card-body'>
                    <AiFillCar size={100} className='card-img'/>
                    <div className='card-title'>Vehicle Name: {props.carName}</div>
                    <div className='card-mpg'>Miles Per Gallon: {props.milesPerGallon}</div>
                </div>
            </div>
        </div>

        

        
    );
}
