import React from 'react';
import { Link } from 'react-router-dom';
import arrowR from '../images/svg/arrow-r.svg';

export const SliderSurfMap = () => {
    return (
        <div className='slider-map-container'>
            <div className='slider-map'>
                <div className='slider-dots'>
                    <div className='slider-dots__circle circle1'></div>
                    <div className='slider-dots__content'>
                        <div className='slider-dots__content-head'>
                            <div className='slider-dots__content-title'>Airle Beach</div>
                            <div className='slider-dots__content-subtitle'>Australia</div>
                        </div>
                        <Link to='/' className='slider-dots__content-link'>
                            <img src={arrowR} alt='arrow'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SliderSurfMap;

                {/* <div className='slider-dots__content-row'>
                    <div className='slider-dots__content-item'>
                        <img src={sliderS} alt='surf'/>
                        <div className='slider-dots__content-number'>9 - 13</div>
                        <div className='slider-dots__content-name'>Surf (FT)</div>
                    </div>
                    <div className='slider-dots__content-item'>
                        <img src={sliderT} alt='surf'/>
                        <div className='slider-dots__content-number'>+ 2.3</div>
                        <div className='slider-dots__content-name'>Tide (FT)</div>
                    </div>
                    <div className='slider-dots__content-item'>
                        <img src={sliderW} alt='surf'/>
                        <div className='slider-dots__content-number'>4 SE</div>
                        <div className='slider-dots__content-name'>Wind (KTS)</div>
                    </div>
                </div> */}