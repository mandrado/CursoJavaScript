import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Small, Title } from './styled';

export default function Login() {
  // variavel do disparador de ações
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed={false}>
        Login <Small>Oi mundo! </Small>
      </Title>
      <Small>Oi mundo, estamos aqui para fazer algo supreendente</Small>

      <Paragrafo> texto de teste </Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
