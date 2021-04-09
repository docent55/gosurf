import React from 'react';
import SliderSurfMap from '../components/SliderSurfMap';
import { SliderSurfMapData } from '../components/SlkiderSurfMapData';


export const Surf = () => {
    return (
        <div className='container'>
        <div className='surf'>
            <div className='title'>
                <span>
                    surf
                    <h3>surf</h3>
                </span>
            </div>

        </div>
        <SliderSurfMap data={ SliderSurfMapData } />
        </div>       
    )
}

export default Surf;