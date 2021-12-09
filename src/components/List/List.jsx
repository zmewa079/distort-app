import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './List.css'


const List = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    createdBy: '',
    lists: ''
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
      setFormData({
        ...formData, [e.target.name]: e.target.value
    })
    
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
    <div>
    <h4>Name of New List</h4>
    <input
      className='label'
      type="text"
      autoComplete="off"
      placeholder='name of new list'
      id="name"
      value={props.name}
      name="name"
      onChange={handleChange}
      /> 
    </div>
    <input
      className='label'
      type="text"
      autoComplete="off"
      placeholder='description'
      id="description"
      value={props.description}
      name="description"
      onChange={handleChange}
      />
    <button className='button'>Create List</button>
    {<Link to='/' ><button className='button'>Cancel</button></Link>}
    </form>
  );
}


export default List