import React from "react";//, { useState } 
import "./index.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyDydXgSD9aepywJ9KlnLI_iHZJkNpUm84M");
// let newlat;
// let newlng;
// Geocode.fromAddress('950 f ave coronado').then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     newlat = lat;
//     newlng = lng;
//   }
// )
// console.log(newlat, newlng);
const MapComponent = withScriptjs(
    withGoogleMap((props) => {
        return (
                <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat: props.passedlat, lng: props.passedlng}}
                >
                    {props.isMarkerShown && <Marker position={{ lat: props.passedlat, lng: props.passedlng }} />}
                </GoogleMap>
        )
    })
);
//lat: 32.71500, lng: -117.16250
export default MapComponent;
