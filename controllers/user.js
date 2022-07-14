const mongodb = require('../DataBase/dbConnect');
const ObjectId = require('mongodb').ObjectId;
const { CreateUserBodyValid } = require('../Utils/validation');

const getAll = async (req, res) => {
  try {
    mongodb
      .getDb()
      .db()
      .collection('users')
      .find()
      .toArray((err, lists) => {
        if (err) {
          res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must you a valid user id to find a user.');
    }
    const userId = new ObjectId(req.params.id);
    mongodb
      .getDb()
      .db()
      .collection('users')
      .find({ _id: userId })
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid user id to update a user.');
    }

    const { error } = await CreateUserBodyValid(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }

    const userId = new ObjectId(req.params.id);
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('users')
      .replaceOne({ _id: userId }, user);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(response.error || 'Some error occuring while updating the user.');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { error } = await CreateUserBodyValid(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }

    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('users')
      .insertOne(user);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || 'Some error occuring while creating the user.');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid user id to delete a user.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('users')
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      req
        .status(500)
        .json(response.error || 'Some error occured while deleting the user.');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAll, getSingle, updateUser, createUser, deleteUser };
