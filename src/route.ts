import { Request, Response } from 'express';
import createUser from './services/CreateUsers';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'armando@email.com',
    password: 'abc123456',
    techs: [
      'Node.Js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 3 },
    ],
  });

  return response.json({ message: 'Hello World!'});
}