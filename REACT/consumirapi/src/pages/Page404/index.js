import React from 'react';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  // Ao clicar em uma pagina que não existe, retornar para home
  history.push('/');
  return (
    <Container>
      <h1>Essa página não existe</h1>
    </Container>
  );
}
