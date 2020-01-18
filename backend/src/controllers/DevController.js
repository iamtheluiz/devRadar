const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Models
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, longitude, latitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const { data: { name = login, avatar_url, bio } } = await axios.get(`https://api.github.com/users/${github_username}`);

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    res.json(dev);
  },

  async destroy(req, res) {
    const { id } = req.params;

    const result = await Dev.deleteOne({ _id: id });

    return res.json(result);
  }
}