import React, { useState } from 'react'

const AddMusic = ({suggestion}) => {
  const [formData, setFormData] = useState({
    Name: '',
    Type: '',
    Description: '',
    wikiUrl: '',
    youtubeUrl: ''
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
      setFormData(
        formData.Name, 
        formData.Type, formData.Description, formData.wikiUrl, formData.youtubeUrl)
    } catch (err) {
      console.log(err)
    }
  }
  
  const { Name, Type, Description, wikiUrl, youtubeUrl } = formData
  

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <input 
          hidden="true"
          type="text"
          autoComplete="off"
          id="Name"
          value={Name}
          name="Name"
          onChange={handleChange}
        />
        <input
          hidden="true"
          type="text"
          autoComplete="off"
          id="Type"
          value={Type}
          name="Type"
          onChange={handleChange}
        />
        <input
          hidden="true"
          type="text"
          autoComplete="off"
          id="Description"
          value={Description}
          name="Description"
          onChange={handleChange}
        />
        <input
          hidden="true"
          type="text"
          autoComplete="off"
          id="wikiUrl"
          value={wikiUrl}
          name="wikiUrl"
          onChange={handleChange}
        />
        <input
          hidden="true"
          type="text"
          autoComplete="off"
          id="youtubeUrl"
          value={youtubeUrl}
          name="youtubeUrl"
          onChange={handleChange}
        />
        <button >Add To List</button>
    </form>
  );
}

export default AddMusic