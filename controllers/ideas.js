const mongodb = require('../DataBase/dbConnect');
const ObjectId = require('mongodb').ObjectId;
// import validation

const getAll = async (req, res) => {
  mongodb
    .getDb()
    .db()
    .collection('ideas')
    .find()
    .toArray((err, ideas) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(ideas);
    });
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must you a valid idea id to find a idea.');
  }
  const ideaId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('ideas')
    .find({ _id: ideaId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};

const updateIdea = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid idea id to update an idea.');
  }
  const ideaId = new ObjectId(req.params.id);
  const idea = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    inside: req.body.inside,
    location: req.body.location,
    participants: req.body.participants,
    requirement: req.body.requirement,
    review: req.body.review,
    category: req.body.category,
    media: req.body.media,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('ideas')
    .replaceOne({ _id: ideaId }, idea);
  console.log(response);
  if (response.modififedCount > 0) {
    res.status(204).json(response);
  } else {
    req
      .status(500)
      .json(
        response.error || 'Some error occuring while updating the to do idea.'
      );
  }
};

const createIdea = async (req, res) => {
  const idea = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    inside: req.body.inside,
    location: req.body.location,
    participants: req.body.participants,
    requirement: req.body.requirement,
    review: req.body.review,
    category: req.body.category,
    media: req.body.media,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('ideas')
    .insertOne(toDo);
  if (response.acknowledged) {
    res.status(201).json(repsonse);
  } else {
    res
      .status(500)
      .json(repsonse.error || 'Some error occured while creating the idea.');
  }
};

const deleteIdea = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid idea ID to delete an idea.');
  }
  const IdeaId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('ideas')
    .remove({ _id: ideaId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    req
      .status(500)
      .json(response.error || 'Some error occured while deleting the idea.');
  }
};

module.exports = { getAll, getSingle, updateIdea, createIdea, deleteIdea };
