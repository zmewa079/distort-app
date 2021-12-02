import mongoose from 'mongoose'


const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    Following: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    Followers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    musicList: [{type: mongoose.Schema.Types.ObjectId, ref: "Music"}],
    movieList: [{type: mongoose.Schema.Types.ObjectId, ref: "Movie"}],
    podcastList: [{type: mongoose.Schema.Types.ObjectId, ref: "Podcast"}],
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}