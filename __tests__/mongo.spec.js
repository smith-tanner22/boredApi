const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('users');
  });
  afterAll(async () => {
    await connection.close();
  });

  it(
    'should insert a new user into the users collection',
    async () => {
      const users = db.collection('users');

      const mockUser = {
        id: '123',
        email: 'someone@email.com',
        password: '123456',
      };

      await users.insertOne(mockUser);

      const insertedUser = await users.findOne({ id: '123' });

      expect(insertedUser).toEqual(mockUser);
    },
    it('should delete a user from the users collection', async () => {
      const users = db.collection('users');
      await users.deleteMany({ id: '123' });
      const deletedUser = await users.findOne({ id: '123' });
      expect(deletedUser).toEqual(null);
    })
  );
});
