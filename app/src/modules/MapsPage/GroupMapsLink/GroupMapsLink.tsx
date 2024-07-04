import React from 'react';
import './GroupMapsLink.css';
import Map2Gis from '../../../components/Maps/Map2Gis';
import MapGoogle from '../../../components/Maps/MapGoogle';
import MapYandex from '../../../components/Maps/MapYandex';

export default function GroupMapsLink() {
  return (
    <div className='maps-container'>
      <MapYandex />
      <Map2Gis />
      <MapGoogle />
    </div>
  )
}
