import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {

    render() {
        const { locations = [] } = this.props;
        const initCoord = locations.length > 0 && locations[0].split(" ");
        const style = {
            width: '100%',
            height: '100%',
            overflow: "hidden"
        };

        return (
            <Map
                google={this.props.google}
                style={style}
                zoom={5}
                initialCenter={{
                    lat: initCoord[0],
                    lng: initCoord[1]
                }}
            >
                {
                    locations.length > 0 && locations.map((location, index) => {
                        const coord = location.split(" ");
                        return (
                            <Marker key={index} position={{lat: coord[0], lng: coord[1]}} />
                        )
                    })
                }
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAYRzx9P5UY3nK8JF-17W5jSNP2k_SQurU"
})(GoogleMap)
