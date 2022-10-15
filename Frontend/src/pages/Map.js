import React, { useRef, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import conf from "./config.json";
import useScript from "../hooks/useScript";
import InfoWindow from "../components/InfoWindow";

import "./Map.css"; 

const Map = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const woosmapLoaded = useScript(conf.woosmapMapJSUrl);

  useEffect(() => {
    if (woosmapLoaded && !map) {
      setMap(initMap());
    }
  }, [woosmapLoaded]);
  const initMap = () => {
    const map = new window.woosmap.map.Map(
      
      mapContainerRef.current,
      conf.woosmapMapOptions
    );
    console.log('mapdeee', map)

    const storesOverlay = new window.woosmap.map.StoresOverlay(
      conf.woosmapMapStyleOptions
    );
    storesOverlay.setMap(map);
    debugger;
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
        map.setCenter({ lat, lng }, { top: 50 });
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
