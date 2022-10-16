import Header from "../components/Header";
import {useState, useContext, useEffect} from 'react';
import {Helmet} from "react-helmet-async";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
// import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";

const Home = () => {
    const {dispatch} = useContext(ModelContext);

    const [state] = useState({
        heading: 'Lets Explore travel and enjoy',
        paragraph: 'Join us today! And discover the most beautiful places and destinations in the world!',
})
    const [registerModel] = useState('registerModel');
    const [loginModel] = useState('loginModel');
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>Lets Explore</title><meta name="description" content="Travel around the world with Lets Explore" />
                <meta name='keywords' content='travel,travel tours, places,airline'/>
            </Helmet>
        <Header heading={state.heading} paragraph={state.paragraph}>
                <button className="btn-default" onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}>login</button>
        </Header>
            <Model current={registerModel}><Register currentModel={loginModel}/> </Model>
            <Model current={loginModel}><Login currentModel={registerModel} /> </Model>
            <Destinations/>
            <Services/>
            <GalleryComponent/>
            {/* <div>Features
                Customize booking plans and planning
                Route optimization
                Sustainable flights
                Offline access
                Location map with crowd calculation

            </div> */}
            {/*<Reviews/>*/}
            <Footer/>
        </>
    )
}

export default Home;
