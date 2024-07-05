import React from 'react';
import './GroupMapsLink.css';
import Map2Gis from '../../../components/Maps/Map2Gis';
import MapGoogle from '../../../components/Maps/MapGoogle';
import MapYandex from '../../../components/Maps/MapYandex';
import { branches, mapUrls } from './constans/branch';
import { branchProps } from './constans/types';



export default function GroupMapsLink({idBranch}: branchProps) {
  const branch = branches.find(b => b.id === parseInt(idBranch));
  

  if (!branch) {
    return <div>not found</div>
  }

  if (parseInt(idBranch) === 2) {
    return (
      <div className='maps-container-tol'>
      <MapYandex url={mapUrls.yandex(branch.yandexUrl)} />
      <Map2Gis url={mapUrls.gis2(branch.gisUrl)} />
    </div>
    )
  }

  return (
    <div className='maps-container'>
      <MapYandex url={mapUrls.yandex(branch.yandexUrl)} />
      <Map2Gis url={mapUrls.gis2(branch.gisUrl)} />
      <MapGoogle url={mapUrls.google(branch.googleUrl)} />
    </div>
  )
}
