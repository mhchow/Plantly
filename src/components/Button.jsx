import React, {useState} from 'react';
import styled from 'styled-components';

const Button = ({triggerText}) => {
  return (
    <>
    <button onClick={() => console.log('click')}>{triggerText}</button>

    </>
  )
}

export default Button;