const server = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);

describe('Test Handlers', () => {
  test('responds to post /users', async () => {
    const res = await (
      await request.post('/users')
    ).send({
      email: 'someone@email.com',
      password: '123456',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
  test('responds to post /ideas', async () => {
    const res = await (
      await request.post('/ideas')
    ).send({
      name: 'title',
      description: 'description',
      category: 'category',
      location: 'location',
      insideoutside: true,
      cost: 0,
      requirements: 'requirements',
      participants: 0,
      reviews: 'reviews',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });

  test('responds to post /media', async () => {
    const res = await (
      await request.post('/media')
    ).send({
      name: 'title',
      ImagePath: 'ImagePath',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });

  test('responds to /reviews', async () => {
    const res = await (
      await request.post('/reviews')
    ).send({
      description: 'description',
      ideaId: 'ideaId',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
});
