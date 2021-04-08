import React from 'react';
import { Link } from 'react-router-dom';
import SliderSurfMap from '../components/SliderSurfMap';

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
        <SliderSurfMap />
        </div>


        // {/* <div className='serf-slider'>
        //     <div className='serf-box'>
        //         <div className='serf-box__inner'>
        //             <div className='serf-box__inner-title'>Malibu Beach</div>
        //             <div className='serf-box__inner-location'>California | USA</div>
        //             <div className='btn-box'>
        //                 <Link to='/'>
        //                     view <span>surf</span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div> */}

        //     {/* <div className='serf-box'>
        //         <div className='serf-box__inner'>
        //             <div className='serf-box__inner-title'>Malibu Beach</div>
        //             <div className='serf-box__inner-location'>California | USA</div>
        //             <div className='btn-box'>
        //                 <Link to='/'>
        //                     view <span>surf</span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='serf-box'>
        //         <div className='serf-box__inner'>
        //             <div className='serf-box__inner-title'>Malibu Beach</div>
        //             <div className='serf-box__inner-location'>California | USA</div>
        //             <div className='btn-box'>
        //                 <Link to='/'>
        //                     view <span>surf</span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='serf-box'>
        //         <div className='serf-box__inner'>
        //             <div className='serf-box__inner-title'>Malibu Beach</div>
        //             <div className='serf-box__inner-location'>California | USA</div>
        //             <div className='btn-box'>
        //                 <Link to='/'>
        //                     view <span>surf</span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div> */}
        // {/* </div> */}
        
        
    )
}

export default Surf;