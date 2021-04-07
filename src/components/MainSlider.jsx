import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from './MainSliderData';

import arrowR from '../images/svg/arrow-r.svg';


export const MainSlider = () => {
    const [current, setCurrent] =useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
        console.log('yoyoyoyoy');
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div className='header__slider'>
                                    <div className='arrows'>
                            <div onClick={nextSlide}> '=' </div>
                            <div onClick={prevSlide}> = </div>
                        </div>
            {SliderData.map((e) => {
                return(
                    <div>

                        <div >
                            <div className={e.id === current ? 'slide active' : 'slide'} key={e.id}>
                                {e.id === current && (
                                <div className='slider-item__info'>
                                    <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                                    <div className='slider-item__info-title'>{e.surf}</div>
                                    <div className='slider-item__info-suptext suptitle-left'>Condition</div>
                                    <div className='slider-item__info-text'>{e.condition}</div>
                                    <Link to='' className='slider-item__info-link'>
                                        <img src={arrowR} alt='=>'/>
                                    </Link>
                                </div>)}
                            </div>
                          
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default MainSlider;
