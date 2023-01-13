const Joi = require('joi');
const axios = require('axios');

const validate = async (restaurant) => {
  let data;
  await axios.get('http://localhost:3000/api/chefs/ids').then((res) => {
    data = res.data;
  });
  let chefsIds = data.data.map((chef) => chef._id);
  const schema = Joi.object({
    Username: Joi.string(),
    chef: Joi.string()
      .valid(...chefsIds)
      .required(),
    rating: Joi.number().min(0).max(5),
    popular: Joi.boolean(),
  });
  return schema.validate(restaurant);
};
module.exports = { validate };

const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
