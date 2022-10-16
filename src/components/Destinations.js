import {useContext, useState} from "react";
import DestinationContext from "../context/DestinationContext";
import DestinationsList from "./DestinationsList";

const Destinations = () => {
    const {destinationsData: {destinations}} = useContext(DestinationContext);

    const [state] = useState({
        heading: "Discover the most fascinating places in the world with us at Lets Explore",
        paragraph: "Traveling is a challenging thing. It forces you to trust strangers and lose all the familiar comforts of home and friends." +
            "You are constantly in balance." +
            "Nothing is yours except the essentials air, sleep, " +
            "A dream, the sea, the sky - all things tend towards eternity or what we imagine of it.",
    })
    return (
        <div className="destinations">
            <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="destinations__paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
                <div className='destinations__block'>
                    <div className='row ml-minus-15 mr-minus-15'>
                        {destinations.map((destination) => (
                            <DestinationsList
                                destination={destination}
                                key={destination.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
