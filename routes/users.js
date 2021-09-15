var express = require('express');
var userRouter = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate');


userRouter.use(bodyParser.json());
userRouter.route('/')
  .get(authenticate.verifyUser, (req, res, next) => {
      User.findById(req.user._id)
        .then((users) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 500;
    res.send('POST operation is not valid');
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
      User.findByIdAndRemove({_id:req.user._id})
      .then(() => {
          res.statusCode = 200;
          res.send('Profile has been deleted successfully');
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put(authenticate.verifyUser,(req, res, next) => {
      User.findByIdAndUpdate({_id:req.user._id},req.body)
      .then(() => {
          res.statusCode = 200;
          res.send('Profile has been updated successfully');
      }, (err) => next(err))
      .catch((err) => next(err));
  });
userRouter.post('/signup', (req, res, next) => {
    User.register(new User({  username:req.body.username,lastname:req.body.lastname,firstname:req.body.firstname,
      email:req.body.email,age:req.body.age,homeAddress:req.body.homeAddress,currentAddress:req.body.currentAddress,
      gender:req.body.gender,nationality:req.body.nationality, }),
        req.body.password, (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({ err: err });
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({ success: true, status: 'Registration Successful!' });
                });
            }
        });
});
userRouter.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, token: token, status: 'You are successfully logged in!' });
});

module.exports = userRouter;