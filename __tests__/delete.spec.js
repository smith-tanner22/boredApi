const server = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);

describe('Test Handlers', () => {
  test('responds to delete /users', async () => {
    const res = await (
      await request.delete('/users')
    ).send({
      id: '123',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
  test('responds to delete /ideas', async () => {
    const res = await (
      await request.delete('/ideas')
    ).send({
      id: '123',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
  test('responds to delete /media', async () => {
    const res = await (
      await request.delete('/media')
    ).send({
      id: '123',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
  test('responds to delete /reviews', async () => {
    const res = await (
      await request.delete('/reviews')
    ).send({
      id: '123',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
});
