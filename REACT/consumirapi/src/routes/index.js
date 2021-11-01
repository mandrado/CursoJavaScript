import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Imagens from '../pages/Imagens';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute
        exact
        path="/aluno/:id/edit"
        component={Aluno}
        isClosed={false}
      />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed={false} />
      <MyRoute exact path="/imagens/:id" component={Imagens} isClosed={false} />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
