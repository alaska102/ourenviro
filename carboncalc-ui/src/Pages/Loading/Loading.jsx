import * as React from 'react';
import './Loading.css'
export default function Loading() {
    return (
        <div className='loading'>
            <div className='loading-dot'></div>
            <div className='loading-dot'></div>
            <div className='loading-dot'></div>
            <div className='loading-dot'></div>
        </div>
    );
}