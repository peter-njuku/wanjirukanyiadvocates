'use client';

import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px'
};

// Wanjiru Kanyi Advocates location (example coordinates - update with actual location)
const center = {
  lat: -1.2596073733945714,
  lng: 36.71382471012782
};

const mapOptions = {
  disableDefaultUI: false,
  clickableIcons: true,
  scrollwheel: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
};

interface GoogleMapComponentProps {
  showInfoWindow?: boolean;
  className?: string;
}

function GoogleMapComponent({ showInfoWindow = false, className = '' }: GoogleMapComponentProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places', 'geometry'] // Added geometry for distance calculations
  });

  const [infoWindowOpen, setInfoWindowOpen] = React.useState(showInfoWindow);

  // Memoize map options to prevent re-renders
  const options = useMemo(() => mapOptions, []);

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Error loading maps</p>
          <p className="text-sm text-gray-500">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg animate-pulse">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2 animate-bounce" />
          <p className="text-gray-600">Loading Maps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Increased zoom for better street view
        options={options}
      >
        <Marker 
          position={center}
          onClick={() => setInfoWindowOpen(true)}
          title="Wanjiru Kanyi Advocates"
        />
        
        {infoWindowOpen && (
          <InfoWindow
            position={center}
            onCloseClick={() => setInfoWindowOpen(false)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -40)
            }}
          >
            <div className="p-2 max-w-xs">
              <h3 className="font-bold text-lg mb-2">Wanjiru Kanyi Advocates</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Nairobi, Kenya</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a href="tel:+254700000000" className="text-blue-600 hover:underline">
                    +254 700 000 000
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-600" />
                  <a href="mailto:info@wanjirukanyiadvocates.com" className="text-blue-600 hover:underline">
                    info@wanjirukanyiadvocates.com
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span>Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
              
              <div className="mt-3 pt-2 border-t">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapComponent;