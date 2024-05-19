import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MUMBAI_COORDS = [19.0760, 72.8777]; // Coordinates of Mumbai

const EnvironmentalEvents = ({ events = [] }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView(MUMBAI_COORDS, 11); // Initial view

    // Use a free tile provider like OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each event
    events.slice(0, 4).forEach((event) => { // Display only the first 4 events
      const marker = L.marker([event.lat, event.lng]).addTo(map);
      marker.bindPopup(
        `<h3>${event.title}</h3>
         <p>${event.description}</p>`
      );
    });
  }, [events]);

  return <div id="map" ref={mapRef} style={{ height: '400px' }} />;
};

export default EnvironmentalEvents;
