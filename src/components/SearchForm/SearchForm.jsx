import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SearchForm = (props) => {
  // const navigate = useNavigate()
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
      <input placeholder="Select Name"
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <br />
      <p>Type</p>
      <select name="type" placeholder="Select Type" onChange={handleChange}>
      <option value="movie">Movie</option>
      <option value="music">Music</option>
      <option value="podcast">Podcast</option>
      </select>
      <br />
      <button disabled={isFormInvalid()}>Get Suggestions</button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </form>
  );
}

export default SearchForm