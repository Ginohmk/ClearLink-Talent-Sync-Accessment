import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  padding: 14px 24px;
  border-radius: 100px;
  min-width: 144px;
  font-weight: 600;
  line-height: 24px;

  background-color: ${({ bgColor }) =>
    bgColor ? `var(${bgColor})` : 'transparent'};

  border: 1px solid
    ${({ borderColor, bgColor }) =>
      borderColor ? `var(${borderColor})` : `var(${bgColor})`};

  color: ${({ textColor }) =>
    textColor ? `var(${textColor})` : 'var(--gray-900)'};
`;
