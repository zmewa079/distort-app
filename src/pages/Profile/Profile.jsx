import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Profile = ({loggedInUser}) => {
const location = useLocation()
const user = location.state 

    return (
        <>
        <main >
            <body>
            <h2>
            Name: {user.name}
            </h2>
            <h2>
            Avatar: {user.avatar}
            </h2>
            <h2>
            Following: {user.following}
            </h2>
            <h2>
            Followers: {user.followers}
            </h2>
            <h2>
            Music List: {user.musicList}
            </h2>
            <h2>
            Movie List: {user.movieList}
            </h2>
            <h2>
            Podcast List: {user.podcastList}
            </h2>
            {<Link to="/create-list" ><button>Create List</button></Link>}
            </body> 
        </main>
    </>
)
            }

export default Profile

// {loggedInUser.profile === user.profile ? 
//     <form
//     > 
//     <h2>List</h2>
//     <input placeholder=""
//         type="text"
//         name="name"
//     />
//     <button >Add List</button>
//     </form>
//     :
//     ''
//     }

