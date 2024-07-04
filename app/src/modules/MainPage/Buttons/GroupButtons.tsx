import React from 'react';
import './GroupButtons.css';
import ButtonLike from '../../../components/Buttons/ButtonLike/ButtonLike';
import ButtonNegative from '../../../components/Buttons/ButtonNegative/ButtonNegative';

export default function GroupButtons() {
  return (
    <div className='button-container'>
      <ButtonLike />
      <ButtonNegative />
    </div>
  )
}
