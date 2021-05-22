import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { GeoJsonObject } from 'geojson';
import defaultGeo from '../resources/data/aus.geo.json';
import {
  MapContainer,
  GeoJSON as GeoJSONComponent,
  TileLayer,
} from 'react-leaflet';
import bbox from '@turf/bbox';
import { LatLngBoundsLiteral } from 'leaflet';

interface GeoLocationProps {
  code: string;
}

export const GeoLocation: React.FC<GeoLocationProps> = ({ code }) => {
  const [geoData, setGeoData] = useState<GeoJsonObject>(
    defaultGeo as GeoJsonObject
  );
  const [bounds, setBounds] = useState<LatLngBoundsLiteral>([
    [-54.753891, 112.907211],
    [-10.05139, 159.101898],
  ]);
  useEffect(() => {
    import(`../resources/data/${code}.geo.json`).then((module) => {
      const data = module.default;

      const bboxArray = bbox(data);
      const corner1: [number, number] = [bboxArray[1], bboxArray[0]];
      const corner2: [number, number] = [bboxArray[3], bboxArray[2]];

      setGeoData(data as GeoJsonObject);
      setBounds([corner1, corner2]);
    });
  }, [code]);

  return (
    <MapContainer
      key={JSON.stringify(bounds)}
      style={{ height: '80vh' }}
      bounds={bounds}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSONComponent data={geoData} />
    </MapContainer>
  );
};
