import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './css/map.css'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const [center, setCenter] = useState([8.06012, 80.273583])
  return (
    <div className='map-container d-flex flex-column align-items-center'>
      <div className='map-section d-flex justify-content-center align-items-center'>
        <MapContainer
          className='map'
          center={center}
          zoom={15}
          style={{
            height: '90%',
            width: '90%',
            padding: '10px',
          }}
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={center}>
            <Popup>Your train is hear</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className='info-section'>
        <div className='map-detail'>
          <div className='left'>
            <span>
              <span className='lable'>Owner: </span>
              <b>Kavindu Sanjula</b>
            </span>
            <span>
              <span className='lable'>Status: </span>
              <b>REGISTED</b>
            </span>
            <span>
              <span className='lable'>Register Number: </span>
              <b>CAR 3564</b>
            </span>
          </div>
          <div className='right'>
            <span>
              <span className='lable'>Color: </span>
              <b>Black</b>
            </span>
            <span>
              <span className='lable'>Fuel Type: </span>
              <b>Petrol</b>
            </span>
            <span>
              <span className='lable'>Max Speed: </span>
              <b>122km/h</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
