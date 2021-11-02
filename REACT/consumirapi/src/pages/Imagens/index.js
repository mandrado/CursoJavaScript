/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form, Title } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Imagens({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');

  const [isLoading, setIsLoading] = useState(false);

  const [imagem, setImagem] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setImagem(get(data, 'Imagems[0].url', ''));

        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter a imagem');
        setIsLoading(false);
        history.push('/');
      }
    };
    getData();
  }, [id]);

  const handleChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const imagemUrl = URL.createObjectURL(file);
    setImagem(imagemUrl);

    const formData = new FormData();
    formData.append('id_aluno', id);
    formData.append('imagem', file);

    try {
      await axios.post('/imagens/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Imagem enviada com sucesso!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar imagem.');
      console.log(err);
      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Imagens</Title>
      <Form>
        <label htmlFor="imagem">
          {imagem ? <img src={imagem} alt="Imagem" /> : 'Selecionar'}
          <input type="file" id="imagem" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Imagens.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
