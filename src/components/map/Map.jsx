import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[28.547482, 77.299712]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[28.547482, 77.299712]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Harshit Dandriyal</h3>
        <span>Your Friendly neighborhood developer</span>
        <br />
        <span>Location : Delhi, India</span>
        <br />
        <span>Email: dandriyalh9318@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
