import mongoose from 'mongoose'


const suggestionSchema = new mongoose.Schema({
  name: String,
  Type: String,
  wTeaser: String,
  wUrl: String,
  yUrl: String,
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
},
{
  timestamps: true,  
})

const Suggestion = mongoose.model('Suggestion', suggestionSchema)

export {
  Suggestion
}