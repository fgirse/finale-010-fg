import React, { useState, useEffect, useRef } from 'react'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

function App() {
  const [map, setMap] = useState()
  const mapElement = useRef()
  const mapRef = useRef()
  mapRef.current = map

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [873820.033, 6105640.629],
        zoom: 19,
      }),
    })
    setMap(initialMap)
  }, [])

  return (
    <section>
      <div style={{ height: '266px', width: '100%' }} ref={mapElement} className="map-container" />
    </section>
  )
}

export default App
