import React from "react";
import "./index.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const MapComponent = withScriptjs(
    withGoogleMap((props) => {
        console.log(props.passedlat, props.passedlng);
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
//lat: 32.71500, lng: -117.16250 - SAN DIEGO
export default MapComponent;
