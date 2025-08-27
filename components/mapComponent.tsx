"use client"
import {Loader} from '@googlemaps/js-api-loader'
import { useEffect, useReducer, useRef } from 'react';

export default function GoogleMapComponent(){

  const mapRef = useRef<HTMLDialogElement>(null)

  useEffect(()=>{

    const initMap = async ()=>{
      const loader = new Loader({
        apiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version:'weekly',
        libraries: ['places']
      })

      const {Map} = await loader.importLibrary('maps')

      const location = {
        lat: -1.2597682670388333, 
        lng: 36.71365304875329
      }
      const options: google.maps.MapOptions = {
        center:location,
        zoom:15,
        mapId:"map",
      }
      new Map(mapRef.current as HTMLElement, options)
    }
    initMap();
  })
  return(
    <div ref={mapRef} className='w-[400px] h-[400px]' />
  )
}