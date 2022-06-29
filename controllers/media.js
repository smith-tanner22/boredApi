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
 * PUT: Update an exiting command
 * **************************************/
const updateMedia= async (req, res, next) => {
 // validate the Data comming in first
  try{
   // validate the body coming in
   const {error} = CreateMediaBodyValid(req.body)
   if(error)
   {
     return res.status(400).json(error);
   }
   // then create the new object
    // create a new command
    const media = {
    name: req.body.name,
    ImagePath: req.body.ImagePath
   
  };
   // Then find and Replace
   const mediaId = new ObjectId(req.params.id);
      const response = await mongodb
          .getDb()
          .db()
          .collection('media')
          .replaceOne({ _id: mediaId }, media);
        console.log(response);
        if (response.modifiedCount > 0) {
          res.status(204).send();
        } else {
          res.status(500).json(response.error || 'error occurred while updating the media.');
        }
  }
  catch (error){
    res.status(500).json({message: "Internal Server Error"})

  }
};



/*****************************************
 * DELETE: Delete an exisiting command
 * **************************************/
const deleteMedia = async (req, res) => {
  try {
      const mediaId = new ObjectId(req.params.id);
      if(mediaId == null)
      {
        res.status(400).json({message:"Invalid Id"})
      }
      const response = await mongodb.getDb().db().collection('media').deleteOne({ _id: mediaId }, true);
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(204).send();
      }
      else {
        res.status(500).json(response.error || 'Some error occurred while deleting the command.');
      }
    
  } catch (error) {
    res.status(500).json({message:error})
    
  }
 
};
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