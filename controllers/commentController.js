import database from '../config/database.js';

import Comment from '../database/models/comment.js';

const find = async (req, res, next) => {
  console.log(req.params.title);
  const data = await Comment.find({
    title: req.params.title,
  });

  return res.status(200).send(data);
};

const create = async (req, res, next) => {
  console.log(req.body);
  const comment = await new Comment({
    title: req.body.title,
    nick: req.body.nick,
    content: req.body.content,
  }).save();
  return res.status(201).send({ data: comment });
};

export default { create, find };
