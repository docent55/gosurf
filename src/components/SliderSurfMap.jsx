import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import arrowR from '../images/svg/arrow-r.svg';
import arrowL from '../images/svg/arrow-l.svg';
import sliderS from '../images/svg/slidr-dots-1.svg';
import sliderT from '../images/svg/slidr-dots-2.svg';
import sliderW from '../images/svg/slidr-dots-3.svg';

export const SliderSurfMap = (data) => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div className='slider-map-container'>
            <div className='surf__subtitle'>
                <div className='subtitle'>
                    <div className='suptitle-left'>Current location </div>
                    <div className='subtitle__head'>California <span>|</span> USA</div>
                </div>
            </div>
            <div className='slider-main__arrows'>
                    <div onClick={prevSlide}> <img className='arrow-slider' src={arrowL} alt='arrow' /> </div>
                    <div onClick={nextSlide}> <img className='arrow-slider' src={arrowR} alt='arrow' /> </div>
            </div>
            <div className='slider-map'>
                <div className='slider-dots'>
                    {data.data.map((e) => {
                        return <div className='slider-dots__circle' 
                        key={e.id}
                        style={{top: e.coordinate.top, left: e.coordinate.left}}
                        onClick={() => setCurrent(e.id)}
                        ></div>
                    })}
                    {data.data.map((e) => {
                        if (e.id === current)
                        return (                 
                            <div key={e.id} className='slider-dots__content'>
                            <div className='slider-dots__content-head'>
                                
                                <div className='slider-dots__content-title'>{e.beach} </div>
                                <div className='slider-dots__content-subtitle'>{e.location.country}</div>
                            </div>
                            <div className='slider-dots__content-icons'>
                                <div className='slider-dots__content-item'>
                                    <img src={sliderS} alt='surf'/>
                                    <div className='slider-dots__content-number'>{e.surf}</div>
                                    <div className='slider-dots__content-name'>Surf (FT)</div>
                                </div>
                                <div className='slider-dots__content-item'>
                                    <img src={sliderT} alt='surf'/>
                                    <div className='slider-dots__content-number'>{e.tide}</div>
                                    <div className='slider-dots__content-name'>Tide (FT)</div>
                                </div>
                                <div className='slider-dots__content-item'>
                                    <img src={sliderW} alt='surf'/>
                                    <div className='slider-dots__content-number'>{e.wind}</div>
                                    <div className='slider-dots__content-name'>Wind (KTS)</div>
                                </div>
                            </div>
                            <Link to='/' className='slider-dots__content-link'>
                                <img src={arrowR} alt='arrow'/>
                            </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default SliderSurfMap;

