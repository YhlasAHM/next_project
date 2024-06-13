'use-client';
import { memo } from "react";

import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const leafletIcon = new L.Icon({
        iconUrl: '/images.png',
        iconSize: [30, 30],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    const [geoData, setGeoData] = useState({ lat: 37.984184, lng: 58.366978 });

    return (
        <MapContainer center={[geoData.lat, geoData.lng]} zoom={100} style={{ height: '90vh', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoData.lat && geoData.lng && (
                <Marker position={[geoData.lat, geoData.lng]} icon={leafletIcon}>
                    <Popup>
                        <a href="#">Ashgabat International Airport</a>
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
}

export default memo(Map)