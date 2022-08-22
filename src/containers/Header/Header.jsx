import './Header.scss'
import {Link} from "react-router-dom";
import BurgerOpen from '../../assets/images/burger-open.png'
import BurgerClose from '../../assets/images/burger-close.png'

const Header = ({burger, setBurger}) => {

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="burger">
                        <button className="burger-button" onClick={event => setBurger(!burger)}>
                            <img src={BurgerOpen} className={`${burger ? '' : 'active'}`} alt=""/>
                            <img src={BurgerClose} className={`${burger ? 'active' : ''}`} alt=""/>
                        </button>
                    </div>
                    <div className="header-left">
                        <Link to='/'>302-SCHOOL</Link>
                    </div>
                    <div className="header-right">
                        <ul className="header-right-links">
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header