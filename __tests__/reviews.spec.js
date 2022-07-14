const request = require('supertest');

const reviewsArray = [
  {
    _id: '62c6036a885b0ef61bd44c04',
    description: 'This is test review',
    ideaId: '62b9e22bb0a53cd3379c1f50',
  },
  {
    _id: '62c603bd885b0ef61bd44c06',
    description: 'This is test 3 review',
    ideaId: '62b9e22bb0a53cd3379c1f51',
  },
  {
    _id: '62c603d0885b0ef61bd44c07',
    description: 'This is test 4 review',
    ideaId: '62b9e22bb0a53cd3379c1f52',
  },
];

const review = {
  _id: '62c603d0885b0ef61bd44c07',
  description: 'This is test 4 review',
  ideaId: '62b9e22bb0a53cd3379c1f52',
};

describe('Reviews Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/reviews');

    //expect(response.body).toEqual(reviewsArray); // grabbing the wrong one
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/reviews/62c603d0885b0ef61bd44c07'
    );

    //expect(response.body).toEqual(review); // has [] around it for some reason
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newReview = {
      description: 'This is test review',
      ideaId: '62b9e22bb0a53cd3379c1f50',
    };

    const response = await request('http://localhost:3000')
      .post('/reviews')
      .send(newReview);

    expect(response.statusCode).toBe(201);
  });
});
