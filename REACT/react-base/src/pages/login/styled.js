import styled from 'styled-components';

export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'green')};
  small {
    font-size: 12px;
    margin-left: 15px;
    color: #999;
  }
`;

export const Small = styled.small`
  font-size: 12px;
  margin-left: 15px;
  color: #999;
`;

export const Paragrafo = styled.p`
  font-size: 40px;
`;
