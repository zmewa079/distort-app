import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom'

const Users = ({loggedInUser}) => {
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
          {loggedInUser._id === user._id ? 
            <>
              <p key={user._id}>{user.name}</p>
                <p>Followers: {user.profile.followers.length}</p>
                <h4>Movie Lists: 
                  { user.profile.movieList.length ? 
                    <p>I am a list of movie lists </p> 
                  : 
                    <p>
                      <Link to="/movies">
                        Get movie suggestions
                      </Link>
                    </p>
                  } 
                </h4> 
                <h4>Music Lists: 
                  { user.profile.musicList.length ? 
                    <p> I am a list of music list </p> 
                  : 
                    <p>
                      <Link to="/music">
                        Get music suggestions
                      </Link>
                    </p>
                  } 
                </h4> 
                <h4>Podcast Lists: 
                  { user.profile.podcastList.length ? 
                    <p> I am a list of podcast list </p> 
                  : 
                    <p>
                      <Link to="/podcasts">
                        Get podcast suggestions
                      </Link>
                    </p>} 
                </h4> 
            </> 
          :     
        <>
          <p key={user._id}>{user.name}</p>
            <p>Followers: {user.profile.followers.length}</p>
            <h4>Movie Lists: 
              { user.profile.movieList.length ? 
                <p> I am a list of movie lists </p> 
              : <p>no movie list</p>
              } 
            </h4> 
            <h4>Music Lists: 
              { user.profile.musicList.length ? 
                <p> I am a list of music list </p> 
              : <p>no movie list</p>
              } 
            </h4> 
            <h4>Podcast Lists: 
              { user.profile.podcastList.length ? 
                <p> I am a list of podcast list </p> 
              : <p>no movie list</p>
              } 
            </h4> 
        </> 
      }  
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