const mongodb = require('../DataBase/dbConnect');
const ObjectId = require('mongodb').ObjectId;
const { CreateIdeaBodyValid } = require('../Utils/validation');

/***************************************************
 * GET ALL IDEA
 * ******************************************* */
const getAll = async (req, res) => {
  try {
    console.log('here me');
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
        console.log(ideas);
        res.status(200).json(ideas);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

/***************************************************
 * GET SINGLE IDEA
 * ******************************************* */
const getSingle = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json(error);
  }
};

/***************************************************
 * UPDATE IDEA
 * ******************************************* */
const updateIdea = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid idea id to update an idea.');
    }

    const { error } = await CreateIdeaBodyValid(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }

    console.log('here');
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
    if (response.modifiedCount > 0) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || 'Some error occuring while updating the to do idea.'
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

/***************************************************
 * CREATE NEW IDEA
 * ******************************************* */
const createIdea = async (req, res) => {
  try {
    const { error } = await CreateIdeaBodyValid(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }

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
      .insertOne(idea);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || 'Some error occured while creating the idea.');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

/***************************************************
 * DELETE IDEA
 * ******************************************* */
const deleteIdea = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid idea ID to delete an idea.');
    }
    const ideaId = new ObjectId(req.params.id);
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
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAll, getSingle, updateIdea, createIdea, deleteIdea };
