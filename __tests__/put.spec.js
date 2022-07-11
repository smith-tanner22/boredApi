const server = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);

describe('Test Handlers', () => {
  test('responds to put /users', async () => {
    const res = await (
      await request.put('/users')
    ).send({
      id: '123',
      email: '',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
  test('responds to put /ideas', async () => {
    const res = await (
      await request.put('/ideas')
    ).send({
      id: '123',
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

  test('responds to put /media', async () => {
    const res = await (
      await request.put('/media')
    ).send({
      id: '123',
      name: 'title',
      ImagePath: 'ImagePath',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });

  test('responds to put /reviews', async () => {
    const res = await (
      await request.put('/reviews')
    ).send({
      id: '123',
      description: 'description',
      ideaId: 'ideaId',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
});
