import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import arrowR from '../images/svg/arrow-r.svg';
import arrowL from '../images/svg/arrow-l.svg';
import virgin from '../images/svg/virgin.svg';



export const TravelSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = 5;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div className='slider-travel-container'>
            <div className='surf__subtitle'>
                <div className='subtitle'>
                    <div className='suptitle-left'>Shore</div>
                    <div className='subtitle__head'>Airlie Beach <span>|</span> Australia</div>
                </div>
            </div>
            <div className='slider-main__arrows'>
                    <div onClick={prevSlide}> <img className='arrow-slider' src={arrowL} alt='arrow' /> </div>
                    <div onClick={nextSlide}> <img className='arrow-slider' src={arrowR} alt='arrow' /> </div>
            </div>
            <div className='slider-travel'>
                <div className='slider-travel__head'>
                    <div className='slider-travel__head-subtitle'>Airline</div>
                    <div className='slider-travel__head-title'>WWW AIR <img className='slider-travel__logo' src={virgin} alt='123'/></div>
                    
                </div>
                <div className='slider-travel__data'>
                    <div className='slider-travel__data-item'>
                        <div className='slider-travel__data-item-info'>
                            <div className='slider-travel__data-subtitle'>Destination</div>
                            <div className='slider-travel__data-title'>Queensland Australia</div>
                        </div>
                        <div className='slider-travel__data-item-info'>
                            <div className='slider-travel__data-subtitle'>Distance</div>
                            <div className='slider-travel__data-title'>7,065 Miles</div>
                        </div>
                        <div className='slider-travel__data-item-info'>
                            <div className='slider-travel__data-subtitle'>Travel Time</div>
                            <div className='slider-travel__data-title'>23 Hours 5 Minutes</div>
                        </div>
                        <div className='slider-travel__data-item-info'>
                            <div className='slider-travel__data-subtitle'>Pricing</div>
                            <div className='slider-travel__data-title'>$1,976 USD
                                <div>
                                <span>Round Trip</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelSlider;
