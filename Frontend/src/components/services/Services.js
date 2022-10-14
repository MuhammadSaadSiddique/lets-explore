import {useContext, useState} from "react";
import ServicesLeft from "./ServicesLeft";
import SharedContext from "../../context/SharedContext";
import ServicesList from "./ServicesList";

const Services = () =>{
    const {sharedData: {serviceData}} = useContext(SharedContext);
    const [state] = useState({
        heading: 'Why do our customers love Lets Explore? Because of our unique services. ',
        subHeading: 'Our goal is to provide a unique and professional service to our customers and thanks to the high-level service to our customers, this is the story that they love Lets Explore.' })
    return(
        <div className="services">
            <div className="services__contents">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services__contents__container">
                        <div className="col-6 p-15">
                                <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
                        </div>
                        <div className="col-6 p-15">
                                <ServicesList services={serviceData}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services;
