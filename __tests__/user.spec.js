const request = require('supertest');

const usersArray = [
  {
    _id: '62c5b41845c15ca653d6691a',
    email: 'tanner22@email.com',
    password: 'c0olGuy23',
  },
  {
    _id: '62c5b41845c15ca653d6691b',
    email: 'tonystark@email.com',
    password: 'ir0nman67',
  },
  {
    _id: '62c5b41845c15ca653d6691c',
    email: 'peterp@email.com',
    password: 'spiderm@n',
  },
  {
    _id: '62c64b13c470370011d608c5',
    tenant: 'dev-wnj6yo8f',
    connection: 'Bored-MongoDB',
    email: 'smi19057@byui.edu',
    password: '$2b$10$bdKxQe2Tv6ftQRNW7KbzJeE0jNz1PYuy.faQdE/fxEVRwyMRv4k0m',
    debug: true,
  },
  //   {
  //     _id: '62c6514ddc687d0011a5e90c',
  //     tenant: 'dev-wnj6yo8f',
  //     connection: 'Bored-MongoDB',
  //     email: 'example@email.com',
  //     password: '$2b$10$Dqk/eIzjBffIhwjP6RbsJeGfd3kw7Oo8FRNSup29yzLjuDkxpbfKq',
  //     debug: true,
  //   },
  {
    _id: '62cc9cdb4cff0c9caee92093',
    email: 'emilyButton@gmail.com',
    age: 25,
    __v: 0,
  },
  {
    _id: '62cef3a0a72778001105ac2e',
    tenant: 'dev-wnj6yo8f',
    connection: 'Bored-MongoDB',
    email: 'smith.tanner2222@gmail.com',
    password: '$2b$10$l5g7oqK3j0s6EkDFGgiA0OJkRzvfvRvM51fF9Aup7d1IKkyEaf.7W',
    debug: true,
  },
  {
    _id: '62cf7ca873e343aa50442d93',
    email: 'string@email.com',
    password: 'string',
  },
];

const user = {
  _id: '62cf7ca873e343aa50442d93',
  email: 'string@email.com',
  password: 'string',
};

describe('user Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/users');

    //expect(response.body).toEqual(usersArray);
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/users/62cf7ca873e343aa50442d93'
    );

    //expect(response.body).toEqual(user);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newUser = {
      email: 'email@email.com',
      password: 'password',
    };

    const response = await request('http://localhost:3000')
      .post('/users')
      .send(newUser);
    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/users/62cf7ca873e343aa50442d93'
    );

    expect(response.statusCode).toBe(500);
  });
});
