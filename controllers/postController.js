import database from '../config/database.js';

import Post from '../database/models/post.js';

const find = async (req, res, next) => {
  const data = await Post.find({
    category: req.params.category,
  });

  return res.status(200).send(data);
};

const findUser = async (req, res, next) => {
  const data = await Post.find({
    nick: req.params.user,
  });

  return res.status(200).send(data);
};

const findAll = async (req, res, next) => {
  const data = await Post.find();

  return res.status(200).send(data);
};

const create = async (req, res, next) => {
  // console.log(req.body);
  const post = await new Post({
    user: req.body.userId,
    title: req.body.title,
    date: res.body.date,
    category: req.body.category,
    contentPost: req.body.contentPost,
  }).save();
  return res.status(201).send({ data: post });
};

export default { create, findAll, find, findUser };
