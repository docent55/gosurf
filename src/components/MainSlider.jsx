import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from './MainSliderData';

import arrowR from '../images/svg/arrow-r.svg';
import arrowL from '../images/svg/arrow-l.svg';


export const MainSlider = () => {
    const [current, setCurrent] =useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        
        <div className='slider-main'>
            <img className='slider-main__image' alt='slidermain' src={SliderData[current].images}/>
            <div className='slider-main__arrows'>
                    <div onClick={prevSlide}> <img className='arrow-slider' src={arrowL} alt='arrow' /> </div>
                    <div onClick={nextSlide}> <img className='arrow-slider' src={arrowR} alt='arrow' /> </div>
            </div>
            {SliderData.map((e) => {
                return(
                        <div className='slider-main__item' key={e.id}>
                                {e.id === current && (
                                
                                <div className='slider-main__info'>
                                    <div className='slider-main__info-subtitle suptitle-left'>Surf</div>
                                    <div className='slider-main__info-title'>{e.surf}</div>
                                    <div className='slider-main__info-subtext suptitle-left'>Condition</div>
                                    <div className='slider-main__info-text'>{e.condition}</div>
                                    <Link to='' className='slider-main__info-link'>
                                        <img src={arrowR} alt='=>'/>
                                    </Link>
                                </div>)}
                        </div>
                )
            })}
            <div className='slider-main-dotshead'>
            {SliderData.map((e) => {
                return(
                    <div key={e.id} 
                    className={current == e.id ? 'slider-main-dotshead__item slider-main-dotshead__item--active' : 'slider-main-dotshead__item'} 
                    onClick={() => setCurrent(e.id)}>
                            <div className='slider-main-dotshead__number'>{e.number}</div>
                            <div className='slider-main-dotshead__name'>{e.surf}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MainSlider;
