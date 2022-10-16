import React, { useRef, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import conf from "./config.json";
import useScript from "./../hooks/useScript";
import InfoWindow from "./../components/InfoWindow.js";

import "./Map.css";

const Map = ({Latitude,Longitude}) => {
  console.log('map Latitude', Latitude, 'Longitude', Longitude)
  
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const woosmapLoaded = useScript(conf.woosmapMapJSUrl);
  
    useEffect(() => {
      if (woosmapLoaded && !map) { //&& !Latitude && !Longitude
        console.log('Latitude', Latitude, 'Longitude', Longitude)
        // map.setCenter({ Latitude, Longitude }, { top: 50 });
        setMap(initMap(Latitude, Longitude));

      }
    }, [woosmapLoaded]);
  


  const initMap = (Latitude, Longitude) => {
    // const map = new window.woosmap.map.Map(
    //   mapContainerRef.current,
    //   conf.woosmapMapOptions.lat=Latitude,
    //   conf.woosmapMapOptions.lng=Longitude,
    //   conf.woosmapMapOptions.zoom=10,
    // );
    console.log('init Latitude', Latitude, 'Longitude', Longitude)
    const map = new window.woosmap.map.Map(mapContainerRef.current,  {
      center: { lat:Latitude, lng:Longitude },
      zoom: 13
    });
    const storesOverlay = new window.woosmap.map.StoresOverlay(
      conf.woosmapMapStyleOptions
    );
    // map.setCenter({ Latitude, Longitude }, { top: 50 });
    storesOverlay.setMap(map);

    const templateRenderer = {
      render: (storeProperties) => {
        return ReactDOMServer.renderToString(
          <InfoWindow
            name={storeProperties.name}
            address={storeProperties.address}
            contact={storeProperties.contact}
            openingHours={storeProperties.open}
          />
        );
      }
    };
    const infoWindow = new window.woosmap.map.InfoWindow({});
    window.woosmap.map.event.addListener(
      map,
      "store_selected",
      (selectedStore) => {
        const lat = selectedStore.geometry.coordinates[1];
        const lng = selectedStore.geometry.coordinates[0];
        infoWindow.setContent(
          templateRenderer.render(selectedStore.properties)
        );
        // map.setCenter({ Latitude, Longitude }, { top: 50 });
        infoWindow.open(map, { lat, lng });
      }
      
    );
     
    return map;
  };

  return (
    <div className="mapContainer">
      <div ref={mapContainerRef} />
    </div>
  );

};

export default Map;
