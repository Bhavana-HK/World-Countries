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
import ErrorBoundary from './ErrorBounday';
import {
  Box,
  Alert,
  AlertDescription,
  AlertIcon,
  Skeleton,
} from '@chakra-ui/react';
interface GeoLocationProps {
  code: string;
}

export const GeoLocation: React.FC<GeoLocationProps> = ({ code }) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [geoData, setGeoData] = useState<GeoJsonObject>(
    defaultGeo as GeoJsonObject
  );
  const [bounds, setBounds] = useState<LatLngBoundsLiteral>([
    [-54.753891, 112.907211],
    [-10.05139, 159.101898],
  ]);
  useEffect(() => {
    setLoading(true);
    import(`../resources/data/${code}.geo.json`)
      .then((module) => {
        const data = module.default;

        const bboxArray = bbox(data);
        const corner1: [number, number] = [bboxArray[1], bboxArray[0]];
        const corner2: [number, number] = [bboxArray[3], bboxArray[2]];

        setGeoData(data as GeoJsonObject);
        setBounds([corner1, corner2]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [code]);

  if (loading)
    return (
      <Skeleton height="85vh" />
    );

  if (error)
    return (
      <Alert status={'error'}>
        <AlertIcon />
        <Box>Some Error occured while displaying location</Box>
        <AlertDescription display={'block'}>{error.message}</AlertDescription>
      </Alert>
    );

  return (
    <ErrorBoundary>
      <MapContainer
        key={JSON.stringify(bounds)}
        style={{ height: '85vh'}}
        bounds={bounds}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSONComponent data={geoData} />
      </MapContainer>
    </ErrorBoundary>
  );
};
