import React from 'react';
import { Link } from 'react-router-dom';
import arrowR from '../images/svg/arrow-r.svg';
import sliderS from '../images/svg/slidr-dots-1.svg';
import sliderT from '../images/svg/slidr-dots-2.svg';
import sliderW from '../images/svg/slidr-dots-3.svg';

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
            <div className='surf__subtitle'>
            <div className='subtitle'>
                <div className='suptitle-left'>Current location</div>
                <div className='subtitle__head'>California <span>|</span> USA</div>
            </div>
            </div>
        </div>
        <div className='slider-map'>
            <div className='slider-dots'>
                <div className='slider-dots__circle'></div>
                <div className='slider-dots__content'>
                    <div className='slider-dots__content-head'>
                        <div className='slider-dots__content-title'>Airle Beach</div>
                        <div className='slider-dots__content-subtitle'>Australia</div>
                    </div>
                    <Link to='/' className='slider-dots__content-link'>
                        <img src={arrowR} alt='arrow'/>
                    </Link>
                </div>
                <div className='slider-dots__content-row'>
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
                </div>
            </div>
        </div>

        <div className='serf-slider'>
            <div className='serf-box'>
                <div className='serf-box__inner'>
                    <div className='serf-box__inner-title'>Malibu Beach</div>
                    <div className='serf-box__inner-location'>California | USA</div>
                    <div className='btn-box'>
                        <Link to='/'>
                            view <span>surf</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className='serf-box'>
                <div className='serf-box__inner'>
                    <div className='serf-box__inner-title'>Malibu Beach</div>
                    <div className='serf-box__inner-location'>California | USA</div>
                    <div className='btn-box'>
                        <Link to='/'>
                            view <span>surf</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='serf-box'>
                <div className='serf-box__inner'>
                    <div className='serf-box__inner-title'>Malibu Beach</div>
                    <div className='serf-box__inner-location'>California | USA</div>
                    <div className='btn-box'>
                        <Link to='/'>
                            view <span>surf</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='serf-box'>
                <div className='serf-box__inner'>
                    <div className='serf-box__inner-title'>Malibu Beach</div>
                    <div className='serf-box__inner-location'>California | USA</div>
                    <div className='btn-box'>
                        <Link to='/'>
                            view <span>surf</span>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
        </div>
    )
}

export default Surf;