const mongodb = require('../DataBase/dbConnect');
const ObjectId = require('mongodb').ObjectId;
const {CreateReviewBodyValid } = require("../Utils/validation")


/**********************************
 * GET: Getting all the Media
 * ********************************/
const getAll = async (req, res) => {
try {
    const result = await mongodb.getDb().db().collection('reviews').find();
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
const getReviewById = async (req, res) => {
    try {
        const reviewId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('reviews').find({ _id: reviewId  });
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
const createReview = async (req, res) => {
try {

  // validate the body
    const {error} = await CreateReviewBodyValid(req.body)
   if(error)
   {
    return res.status(400).json(error)
   }
     // create a new command
    const review = {
    description: req.body.description,
    ideaId: req.body.ideaId
   
  };

  // insert the new command
  const response = await mongodb.getDb().db().collection('reviews').insertOne(review);
  // check creation of command
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'error occurred while creating the review.');
  }
    
} catch (error) {
    res.status(500).json(error);
}};



/*****************************************
 * PUT: Update an exiting command
 * **************************************/
const updateReview= async (req, res, next) => {
 // validate the Data comming in first
  try{
   // validate the body coming in
   const {error} = CreateReviewBodyValid(req.body)
   if(error)
   {
     return res.status(400).json(error);
   }
   // then create the new object
    // create a new command
    const review = {
    description: req.body.description,
    ideaId: req.body.ideaId
   
  };
   // Then find and Replace
   const reviewId = new ObjectId(req.params.id);
      const response = await mongodb
          .getDb()
          .db()
          .collection('reviews')
          .replaceOne({ _id: reviewId }, review);
        console.log(response);
        if (response.modifiedCount > 0) {
          res.status(204).send();
        } else {
          res.status(500).json(response.error || 'error occurred while updating the review.');
        }
  }
  catch (error){
    res.status(500).json({message: "Internal Server Error"})

  }
};



/*****************************************
 * DELETE: Delete an exisiting command
 * **************************************/
const deleteReview = async (req, res) => {
  try {
      const reviewId = new ObjectId(req.params.id);
      if(reviewId == null)
      {
        res.status(400).json({message:"Invalid Id"})
      }
      const response = await mongodb.getDb().db().collection('reviews').deleteOne({ _id: reviewId }, true);
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(204).send();
      }
      else {
        res.status(500).json(response.error || 'Some error occurred while deleting the review.');
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
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};