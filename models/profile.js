import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    following: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    musicList: [{type: mongoose.Schema.Types.ObjectId, ref: "Suggestion"}],
    movieList: [{type: mongoose.Schema.Types.ObjectId, ref: "Suggestion"}],
    podcastList: [{type: mongoose.Schema.Types.ObjectId, ref: "Suggestion"}],
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}