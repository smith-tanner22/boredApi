const Joi =require("joi")

/******************************************************
 * Validating all the data coming in when creating a new Idea
 * **************************************************** */
const CreateIdeaBodyValid = async (body)=>{
        const schema = Joi.object({
                name: Joi.string().required(),
                description: Joi.string().required(),
                cost: Joi.number().required(),
                inside: Joi.boolean().required(),
                location: Joi.string().required(),
                participants: Joi.string.required(),
                requirement: Joi.required(),
                review: Joi.string().required(),
                category: Joi.string().required(),
                media: Joi.string().required()
        })
        return schema.validate(body);
    }

const CreateMediaBodyValid = async (body)=>{
        const schema = Joi.object({
                name: Joi.string().required(),
                ImagePath: Joi.string().required()
        })
        return schema.validate(body);
    }




    module.exports={
         CreateIdeaBodyValid,
         CreateMediaBodyValid,
    }