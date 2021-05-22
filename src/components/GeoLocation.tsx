import React from 'react';
import 'leaflet/dist/leaflet.css';
import { GeoJsonObject } from 'geojson';
import { MapContainer, GeoJSON as GeoJSONComponent, TileLayer } from 'react-leaflet';
import geoData from '../resources/data/ind.geo.json';
import bbox from '@turf/bbox';


interface GeoLocationProps {
  code: string;
}

export const GeoLocation: React.FC<GeoLocationProps> = ({ code }) => {
  console.log(code);
  const geoData2: GeoJsonObject = geoData as GeoJsonObject;
  const bboxArray = bbox(geoData2);
  const corner1:[number, number] = [bboxArray[1], bboxArray[0]];
  const corner2:[number, number] = [bboxArray[3], bboxArray[2]];
  return (
    <MapContainer
      style={{ height: '80vh' }}
      bounds={[corner1, corner2]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSONComponent data={geoData2}/>
    </MapContainer>
  );
};
