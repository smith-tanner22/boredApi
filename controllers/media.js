const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const { CreateMediaBodyValid,UpdateCommandBodyValid } = require("../Utils/validation")


/**********************************
 * GET: Getting all the Media
 * ********************************/
const getAll = async (req, res) => {
try {
    const result = await mongodb.getDb().db().collection('media').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  }).catch((error)=>{
    res.status(500).json({message:"Failed to retrieve the data from Database "|| error})
  });
} catch (error) {
    res.status(500).json(error);
}};



/*****************************************
 * GET{id}: get specific media by Id
 * **************************************/
const getMediaById = async (req, res) => {
    try {
        const mediaId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('media').find({ _id: mediaId  });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        }).catch((error)=>{
          res.status(500).json({message:"Failed to retrieve the data" || error})
        })   
    } catch (error) {
        res.status(500).json(error);
    }};


/*****************************************
 * POST: Create a new Media
 * **************************************/
const createMedia = async (req, res) => {
try {

  // validate the body
    const {error} = await CreateMediaBodyValid(req.body)
   if(error)
   {
    return res.status(400).json(error)
   }
     // create a new command
    const media = {
    name: req.body.name,
    ImagePath: req.body.ImagePath
   
  };

  // insert the new command
  const response = await mongodb.getDb().db().collection('media').insertOne(media);
  // check creation of command
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'error occurred while creating the media.');
  }
    
} catch (error) {
    res.status(500).json(error);
}};

/*****************************************
 * Export all logic created here
 * **************************************/
module.exports = {
  getAll,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia,
};