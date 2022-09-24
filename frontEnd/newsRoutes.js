const express = require('express');

const db = require('../config/database');

// const sequelize = require('sequelize');
const router = express.Router();

const multer = require('multer');

const path = require('path');

const fs = require('fs');

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploaded_images'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: diskStorage });

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM news', (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: 'get news data',
      data: result,
    });
  });
});

router.post('/', upload.single('url_img'), (req, res, next) => {
  const img = req.file.filename;
  // console.log(img);
  const url = req.body.url_link;
  const description = req.body.description;
  db.query(
    "INSERT INTO news (url_img, url_link, description) VALUES ('" +
      img +
      "', '" +
      url +
      "', '" +
      description +
      "')",
    // `INSERT INTO news (url_link,url_img,description) VALUES ('${url}','${img}','${description}')`,
    (err, result) => {
      // if (err) throw err;
      console.log(result);
      res.status(200).json({
        message: 'news saved',
        data: result,
      });
    }
  );
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('SELECT * FROM news WHERE id = ' + id, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.status(200).json({
      message: 'news fetched',
      data: result,
    });
  });
});

router.patch('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const img = req.body.url_img;
  const url = req.body.url_link;
  const description = req.body.description;
  console.log(id);
  db.query(
    "UPDATE news SET url_link = '" +
      url +
      "', url_img = '" +
      img +
      "',description = '" +
      description +
      "' WHERE id = " +
      id,
    // `UPDATE news SET url_link = '${url}', url_img = '${img}',description = '${description}' WHERE id = '${id}'`,
    (err, result) => {
      if (err) throw err;
      // console.log(result);
      res.status(200).json({
        message: 'news updated',
        data: result,
      });
    }
  );
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  // const data = req.body.data;
  // let someVar = [];
  // let output;

  // function setOutput(result) {
  //   // console.log(result);
  //   output = result;
  //   // console.log(output[0].url_img);
  // }
  db.query('SELECT url_img FROM news WHERE id = ' + id, (err, result) => {
    if (err) {
      throw err;
    } else {
      const data = result[0];
      res.status(200).json({ message: 'news fetched', data: result });
    }
  });

  // const data = req.body.url_img;

  // console.log(data);
  // db.query('DELETE FROM news WHERE id = ' + id, (err, result) => {
  //   if (err) throw err;
  //   // console.log(result);
  //   res.status(200).json({
  //     message: 'news deleted',
  //     data: result,
  //   });
  // });
  const filepath = `../uploaded_images/`;
});

module.exports = router;
