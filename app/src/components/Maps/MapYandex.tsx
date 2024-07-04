import React from 'react';
import Map from '../../ui/Maps/Map';
import yandex from '../../assets/yandex.svg';

export default function MapYandex() {
  return (
    <div>
      <Map name='яндекс' image={yandex} link='https://yandex.ru/maps/org/larets/228719176554/?ll=131.885485%2C43.115536&mode=search&sll=131.885485%2C43.115536&sspn=0.123253%2C0.052567&text=%D0%BB%D0%B0%D1%80%D0%B5%D1%86%20%D0%BB%D0%BE%D0%BC%D0%B1%D0%B0%D1%80%D0%B4%20%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B3%D0%BE&z=14' />
    </div>
  )
}
