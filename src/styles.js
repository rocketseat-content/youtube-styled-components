import styled from "styled-components";

export const Title = styled.h1`
  color: #f00;
  background: #000;
  font-size: ${props => `${props.fontSize}px`};

  span {
    font-size: 12px;
  }
`;

export const TitleSmall = styled(Title)`
  color: #00f;
  font-size: 16px;
`;
