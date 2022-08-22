import './MobileHeader.scss'
import {Link} from "react-router-dom";

const MobileHeader = ({burger, setBurger}) => {
    return (
        <>
            <div className={`shadow ${burger ? 'active' : ''}`} >

            </div>
            <div className={`header-mobile ${burger ? 'active' : ''}`}>
                <h3>Pages</h3>
                <ul>
                    <li onClick={event => setBurger(!burger)}>
                        <Link to='/'  >
                            Home
                        </Link>
                    </li>
                    <li onClick={event => setBurger(!burger)}>
                        <Link to='/about'  >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileHeader