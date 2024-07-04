import React, { Component } from 'react';
import './MapsPage.css';
import vectors from '../../assets/vectors-page2.svg';
import MapsText from '../../modules/MapsPage/MapsText/MapsText';
import GroupMapsLink from '../../modules/MapsPage/GroupMapsLink/GroupMapsLink';

export default class MapsPage extends Component {
  render() {
    return (
      <div >
        <img src={vectors} alt="" className='vectors2' />
        
        <div className='main-container'>
        <div className="container">
          <MapsText />
          <GroupMapsLink />
        </div>
        </div>
        
      </div>
    )
  }
}
