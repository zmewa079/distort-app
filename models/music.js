import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  Rating: Number,
  Author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})

const musicSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  wTeaser: String,
  wUrl: String,
  yUrl: String,
  reviews: [reviewSchema]
},
{
  timestamps: true,  
})

const Music = mongoose.model('Music', musicSchema)

export {
  Music
}