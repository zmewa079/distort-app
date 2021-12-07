import React, { useState } from 'react'

const Lists = (props) => {
  const [formData, setFormData] = useState({
    name: '',
  })
  
const { name } = formData

  return ( 
    <>
    <form
    > 
      <p>List</p>
      <input placeholder=""
        type="text"
        value={name}
        name="name"
      />
    </form>
    </>
  );
}

export default Lists