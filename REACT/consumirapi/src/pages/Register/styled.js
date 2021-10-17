import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Paragrafo = styled.p``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    &:focus {
      border: 1px solid ${primaryColor};
    }
  }
`;
