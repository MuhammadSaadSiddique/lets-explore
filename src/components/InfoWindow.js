import "./InfoWindow.css";

const InfoWindow = ({name, address, contact, openingHours}) => {
    let openingLabel;
    if (openingHours && openingHours.open_now) {
        openingLabel = openingHours.current_slice["all-day"] ? "24/24" : openingHours.current_slice.start + "–" + openingHours.current_slice.end;
    }
    return (
        <div className="infoWindow">
            <div className="infoWindow__storeName">{name}</div>
            {address && <div>
                <div className="infoWindow__addressTitle">Address</div>
                <div className="infoWindow__addressLines">{address.lines}</div>
                <div className="infoWindow__addressCity">{address.city}</div>
            </div>}
            {contact && <div>
                <div className="infoWindow__contactTitle">Contact</div>
                <div className="infoWindow__contactPhone">{contact.phone}</div>
                <div className="infoWindow__contactWebsite"><a href={contact.website} target='_blank'>go to website</a>
                </div>
            </div>}
            {openingLabel &&
            <div className="infoWindow__openingHours">
                Open now: {openingLabel}
            </div>}
        </div>
    );
}
export default InfoWindow;
