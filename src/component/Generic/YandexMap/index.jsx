import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { Wrapper } from "./style";

const mapStyle = {
   position: "relative",
   left: 0,
   top: 0,
   width: "100%",
   height: "416px",
   overflow: "hidden",
};

const YandexMap = ({ mark }) => {
   return (
      <Wrapper>
         <YMaps
            query={{
               apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b",
               lang: "en_RU",
               load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,control.GeolocationControl,geoObject.addon.balloon",
            }}
         >
            <Map
               style={mapStyle}
               defaultState={{
                  center: mark || [41.311081, 69.240562],
                  zoom: 14,
                  controls: [
                     "zoomControl",
                     "fullscreenControl",
                     "geolocationControl",
                  ],
               }}
            >
               <Placemark geometry={mark || [41.311081, 69.240562]} />
            </Map>
         </YMaps>
      </Wrapper>
   );
};

export default YandexMap;
