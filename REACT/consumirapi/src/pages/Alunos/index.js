import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading />
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Imagems[0].url', false) ? (
                <img src={aluno.Imagems[0].url} alt="imagem do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
