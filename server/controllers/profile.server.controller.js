const mongoose = require("mongoose");
const Profile = mongoose.model('Profile');
const User = mongoose.model('User');

exports.createProfile = function (req, res, next) {
  var profile = new Profile(req.body);

  profile.save(function (err) {
    if (err) {
      return res.status(400).send({
        error: err,
        message: 'failed to create profile'
      });
    } else {
      res.status(201).json(profile);
    }
  });
};

exports.updateProfile = function (req, res, next) {
  Profile.findByIdAndUpdate(req.profile._id, req.body, { new: true }, function (err, profile) {
    if (err) {
      return next(err);
    }
    res.json(profile);
  });
};

exports.read = function (req, res) {
  res.json(req.profile);
}

exports.profileById = function (req, res, next, profileId) {
  Profile.findOne({
    _id:profileId
  }, (err, profile) => {
    if (err) {
      return next(err);
    } else {
      if (profile) {
        console.log("Found the profile from db: " + profile);
      } else {
        console.log("The profile not found by is " + profileId);
        return res.status(404).json({ "code": 404, "message": "the profile " + profileId + " isnot found" });
      }
      req.profile = profile;
      next();
    }
  })
}

exports.listProfile = function (req, res, next) {
  let user = req.querey.user;
  Profile.find({}, function (err, profileList) {
    if (err) {
      return res.status(400).send({
        error: err,
        message: 'failed to query profiles'
      })
    } else {
      res.json(ProfileList);
    }
  });
};

