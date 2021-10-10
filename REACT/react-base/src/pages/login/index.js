import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Small, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login <Small>Oi mundo! </Small>
      </Title>
      <Small>Oi mundo, estamos aqui para fazer algo supreendente</Small>

      <Paragrafo> texto de teste </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
