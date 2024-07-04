import React from 'react';
import Map from '../../ui/Maps/Map';
import gis2 from '../../assets/2gis.svg';

export default function Map2Gis() {
  return (
    <div>
      <Map name='яндекс' image={gis2} link='https://2gis.ru/vladivostok/search/%D0%BB%D0%BE%D0%BC%D0%B1%D0%B0%D1%80%D0%B4%20%D0%BB%D0%B0%D1%80%D0%B5%D1%86/firm/70000001025870037/131.93891%2C43.129881?m=131.93891%2C43.129881%2F16' />
    </div>
  )
}
