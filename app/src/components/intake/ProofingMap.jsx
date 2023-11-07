import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import React, { useState } from "react";

export default function ProofingMap({ location }) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

  const [center, setCenter] = useState({ lat: 39.2904, lng: -76.6122 });
  const isLocationSelected = Object.keys(location).length;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;

  if (isLocationSelected) {
    const { lat, long } = location.attributes;
    if (center.lat !== lat || center.lng !== long) {
      setCenter({ lat, lng: long });
    }
  }

  return <Map center={center} isLocationSelected={isLocationSelected} />;
}

function Map({ center, isLocationSelected }) {
  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      {isLocationSelected && <Marker position={center} />}
    </GoogleMap>
  );
}
