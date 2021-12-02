import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

  return (
    <>
      <h1>Hello.  This is a list of all the users.</h1>
      {users.length ? 
      <>
        {users.map(user=>
        <>
          <p key={user._id}>{user.name}</p>
          <p>Followers: {user.profile.followers.length}</p>
          <a href="/movie-list">Movie List</a> <br></br>
          <a href="/music-list">Music List</a> <br></br>
          <a href="/podcast-list">Podcast List</a> <br></br>
        </>
        )}
      </>
      :
        <p>An error occured</p>
      }
    </>
  );
}

export default Users;