import React from 'react';
import Map from '../../ui/Maps/Map';
import google from  '../../assets/google.svg';

export default function MapGoogle() {
  return (
    <div>
      <Map name='яндекс' image={google} link='https://www.google.fr/maps/place/%D0%9B%D0%B0%D1%80%D0%B5%D1%86+%D0%9B%D0%BE%D0%BC%D0%B1%D0%B0%D1%80%D0%B4/@43.1045421,131.9264698,16z/data=!4m10!1m2!2m1!1z0LvQsNGA0LXRhiDQu9C-0LzQsdCw0YDQtCDQstC70LDQtNC40LLQvtGB0YLQvtC6!3m6!1s0x5fb3928f4bd80369:0xa91446f41f87e044!8m2!3d43.107575!4d131.9398081!15sCjDQu9Cw0YDQtdGGINC70L7QvNCx0LDRgNC0INCy0LvQsNC00LjQstC-0YHRgtC-0LqSAQlwYXduX3Nob3DgAQA!16s%2Fg%2F11gfk4k7sn?entry=ttu' />
    </div>
  )
}
