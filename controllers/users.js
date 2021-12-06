import { User } from '../models/user.js'

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

function addFollower(req, res) {
  User.findById(req.params.id)
  .populate('profile')
  .then(user => {
    user.profile.following.push(req.params.follower)
    user.save()
    .then()
  })
}

export {
  index,
  addFollower
}