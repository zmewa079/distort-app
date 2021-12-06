import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import './Users.css'

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers()
      .then(users => setUsers(users))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    try {

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div class='profilecard'>
      <h1 class='hello' >Hello. This is a list of all the users.</h1>
      {users.length ?
        <>
          {users.map(user =>
              <div class='pfcard'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwUXumi2-4L46JVm7bryAzGyWCD1SHYLfIw&usqp=CAU'></img>
                <h2 class='name' key={user._id}>{user.name}</h2>
                <h2 class='mvlst' >List of Movies</h2>
                <h2 class='mclst'>List of Music</h2>
                <h2 class='pdlst'>List of Podcasts</h2>
                <h3 class='fdlst'>Followers (0)</h3>
                {props.loggedInUser.profile === user.profile ? '' :
                  <form action="" onSubmit={handleSubmit} >
                    <button>Follow</button>
                  </form>
                }
            </div>
          )}
        </>
        :
        <p>An error occured</p>
      }
    </div>
  );
}

export default Users