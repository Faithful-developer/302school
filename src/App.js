import './assets/stylesheet.scss'
import{
    Routes,
    Route
} from 'react-router-dom'
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import AboutPage from "./pages/About";
import Footer from "./containers/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from "react";
import {Helmet} from "react-helmet";
import AchievementPage from "./pages/Achievement";
import img from './assets/images/uzb-gerb.png'

const App = () => {

    const [burger , setBurger] = useState(false)

    return (
        <div className="App">
            <Helmet>
                <title>
                    302school
                </title>
                <link rel="icon" href={img} />
                <link rel="apple-touch-icon" href={img} />
            </Helmet>
            <Routes>
                <Route exact path='/' element={<HomePage burger={burger} setBurger={setBurger} />} />
                <Route path='/about'  element={<AboutPage/>} />
                <Route path='/achievement/:id'  element={<AchievementPage/>} />
                <Route path='*'  element={<ErrorPage/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
