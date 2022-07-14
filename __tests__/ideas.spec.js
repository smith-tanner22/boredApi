const request = require('supertest');

describe('Ideas Test Suite', () => {
  const idea = {
    _id: '62cf763873e343aa50442d91',
    name: 'string',
    description: 'string',
    cost: 0,
    inside: true,
    location: 'string',
    participants: '1',
    requirement: 'string',
    category: 'string',
  };

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/ideas/62cf763873e343aa50442d91'
    );
    //expect(response.body).toEqual(idea);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newIdea = {
      name: 'string',
      description: 'string',
      cost: 0,
      inside: true,
      location: 'string',
      participants: 'string',
      requirement: 'string',
      category: 'string',
    };

    const response = await request('http://localhost:3000')
      .post('/ideas')
      .send(newIdea);
    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/ideas/62cf763873e343aa50442d91'
    );
    expect(response.statusCode).toBe(500);
  });
});
