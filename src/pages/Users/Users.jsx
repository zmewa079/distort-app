import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import './Users.css'
import FollowForm from '../../components/FollowForm/FollowForm';
import { Link } from 'react-router-dom';
import { removeUser, removeProfile } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers()
      .then(users => setUsers(users))
  }, [])

let navigate = useNavigate()

  const deleteUser = (profileId, userId) => {
    removeUser(profileId)
    removeProfile(userId)
    props.setUser(null)
    navigate('/')
  }

  return (

    <div class='profilecard'>
      <h1 class='hello' >Hello. This is a list of all the users.</h1>
      {users.length ?
        <>

          {users.map(user => 
              <div class='pfcard'>
                <img height='275px'src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'></img>
                <h2 class='name' key={user._id}>
              {<Link to="/profile" state={user.profile}>{user.name}</Link>}</h2>
                <h2 class='mvlst' >Lists: {user.profile?.lists.length}</h2>
                <h3 class='fdlst'>Followers ({user.profile.followers.length})</h3>
                {props.loggedInUser.profile === user.profile._id ? <button onClick={() => deleteUser(props.loggedInUser.profile,props.loggedInUser._id)}>Delete</button> :

                  <FollowForm userToFollow={user.profile} userFollowing={props.loggedInUser.profile} />
                }
            </div>
          )}
        </>
        :
        <p>Loading...</p>
      }
    </div>
  );
}



export default Users