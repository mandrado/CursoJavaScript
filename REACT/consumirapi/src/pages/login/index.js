import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formError = false;
    if (!isEmail(email) || email.length <= 0) {
      formError = true;
      toast.error('Digite um e-maili valido');
    }
    if (password.length < 6 || password.length > 50) {
      formError = true;
      toast.error('Senha inválida!');
    }
    if (formError) return;

    console.log(email);
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
