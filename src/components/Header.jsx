import React from 'react';
import { Link } from 'react-router-dom'
// import arrowR from '../images/svg/arrow-r.svg';
import logo from '../images/svg/Logo.svg';
import surf from '../images/svg/nav-surf.svg';
import camp from '../images/svg/nav-camp.svg';
import travel from '../images/svg/nav-travel.svg';
import shop from '../images/svg/nav-surfboard.svg';
import search from '../images/svg/search.svg';


export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header__title'>
                    go
                    surf
                </div>

                <div className='header__aside'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='go-surf'/>
                        </Link>
                    </div>
                    <nav className='menu'>
                        <ul className='menu__list'>          
                            <li>
                                <Link to='/surf'>
                                <img src={surf} alt='menu__icon'/><span>Surf</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={travel} alt='menu__icon'/><span>Travel</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={camp} alt='menu__icon'/><span>Sleep</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={shop} alt='menu__icon'/><span>Shop</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__search'>
                        <img src={search} alt='search'/>
                    </div>
                    <div className='header__date'>
                        20<span>05 | 2021</span>
                    </div>
                    <div className='header__location'>
                        California
                    </div>
                </div>
                
                {/* <div className='slider-dotshead'>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                </div> */}
            </header>
        </>
    )
};

export default Header;
