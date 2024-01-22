import React from 'react';
import { ButtonContainer } from './Button.style';

const Button = ({ text, borderColor, bgColor, textColor, func = () => {} }) => {
  return (
    <ButtonContainer
      borderColor={borderColor}
      bgColor={bgColor}
      textColor={textColor}
      onClick={func()}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
