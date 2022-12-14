import './Footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <Link to='/' className='name'>
                            302-school
                        </Link>
                        <a href='https://goo.gl/maps/cqs8PVpUaYdzA6jP7'>
                            Moyqo'rg'on ko'chasi, Тошкент 100093, Uzbekistan
                        </a>
                    </div>
                    <div className="box">
                        <h3>Pages</h3>
                        <ul className='page-container'>
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
                    <div className="box">
                        <h3>Quick links</h3>
                        <ul>
                            <li>
                                <a href="tel: 998973330427">
                                    +998 97 333 04 27
                                </a>
                            </li>
                            <li>
                                <a href="tel: 998712241810 ">
                                    +998 71 224 18 10
                                </a>
                            </li>
                            <li>
                                <a href="mailto: info@302chool.com">
                                    info@302school.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer