import { useState, useContext } from 'react';
import DestinationsContext from "../../context/DestinationContext.js";
import ShowFooterLinks from "./ShowFooterLinks";

const FooterLinks = () => {
    const {
        destinationsData: { destinations },
    } = useContext(DestinationsContext);

    const [state] = useState({
        pages: [
            { id: 1, name: 'home', route: '/' },
            { id: 2, name: 'about us', route: '/about' },
            { id: 3, name: 'Contact', route: '/contact' },
        ],
        partners: [
            { id: 1, name: 'Booking', route: 'https://www.booking.com/' },
            { id: 2, name: 'trivago', route: 'https://www.trivago.com/' },
            { id: 3, name: 'Hostel World', route: 'https://www.hostelworld.com/' },
            { id: 4, name: 'Trip Advisor', route: 'https://www.tripadvisor.com/' },
        ],
        headings: {
            pages: 'pages',
            partners: 'partners',
            destinations: 'destinations',
        },
    });
    const {headings, pages, partners} = state;
    return (
        <div className="row">
            <div className="col-4 p-15">
                <h3 className="footer__heading">{headings.pages}</h3>
                <ShowFooterLinks links={pages}/>
            </div>
            <div className="col-4 p-15">
                <h3 className="footer__heading">{headings.partners}</h3>
                <ShowFooterLinks links={partners} external={true}/>
            </div>
            <div className="col-4 p-15">
                <h3 className="footer__heading">{headings.destinations}</h3>
                <ShowFooterLinks links={destinations}/>
            </div>
        </div>
    )
}

export default FooterLinks;
