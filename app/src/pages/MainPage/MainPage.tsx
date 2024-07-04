import React, { Component } from 'react';
import './MainPage.css';
import Logo from '../../components/Logo/Logo';
import ModuleMainText from '../../modules/MainPage/ModuleMainText/ModuleMainText';
import GroupButtons from '../../modules/MainPage/Buttons/GroupButtons';
import vectorsTop from '../../assets/vectors-page1_top.svg';
import vectorsDown from "../../assets/vectors-page1_down.svg";

export default class MainPage extends Component {
  render() {
    return (
      <div >
        <img src={vectorsTop} alt="" className='vectors-top' />
        <img src={vectorsDown} alt="" className='vectors-down'/>
        <div className='main-container'>
        <div className="container">
          <Logo />
          <ModuleMainText />
          <GroupButtons />
        </div>
        </div>
        
      </div>
    )
  }
}
