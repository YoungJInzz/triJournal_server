const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const Journal = require('../tables/index').Journal;

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

module.exports = {
  createPost: (req, res) => {
    const body = req.body;
    Journal.create({
      best: body.best,
      worst: body.worst,
      todo: body.todo,
      longLog: body.longLog,
      picUrl: body.picUrl,
      userName: req.params.userName
    }).then(function() {
      return { isPostCreated: true };
    });
  },
  getPost: (req, res) => {
    return Journal.findAll({
      where: { userName: req.params.userName }
    }).then(function(journal) {
      if (journal) {
        return journal;
      } else {
        return [];
      }
    });
  },
  edit: (req, res) => {
    const body = req.body;
    Journal.update(
      {
        best: body.best,
        worst: body.worst,
        todo: body.todo,
        longLog: body.longLog,
        picUrl: body.picUrl,
        userName: req.params.userName
      },
      { where: { id: req.params.postId } }
    );
    return Journal.findOne({ where: { id: req.params.postId } });
  },
  deletePost: (req, res) => {
    Journal.destroy({
      where: { id: req.params.postId }
    }).then(function() {
      return { isDeleted: true };
    });
  }
};
