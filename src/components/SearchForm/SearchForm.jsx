import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SearchForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    type: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      navigate(`/${type === 'movie' || type === 'podcast' ? type + 's' : type}`)
    } catch (err) {
      console.log(err)
    }
  }
  const { name, type } = formData

  const isFormInvalid = () => {
    return !(name && type)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    > 
      <p>Name</p>
      <input placeholder="Enter a name"
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <br />
        <p>Type</p>
        <select name="type" placeholder="Select Type" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="podcast">Podcast</option>
        </select>
      <br />
        <button disabled={isFormInvalid()}>
          Get Suggestions
        </button>
    </form>
  );
}

export default SearchForm