import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  // checar se a chave "authorization" existe
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // checar na base se o id e email ainda correspondem ao
    // mesmo usuário que obteve o token
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['usuário não corresponde ao token informado "Usuário inválido!"'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['token expirado ou inválido'],
    });
  }
};
