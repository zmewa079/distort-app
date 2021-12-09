import React from 'react'
import { Link } from 'react-router-dom'
import  './NavBar.css'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div class='toggle'>
							<p class='distort'>
								<button id='togglebtn'><Link to="/" id="link">Distort</Link></button>
							</p>
							<p class = 'welcome'>
								Welcome, <button id='welcomebtn'><Link to="/profile" id="link" state={user}>{user.name}</Link></button>
							</p>
							<p class = 'users'>
								<button id='togglebtn'><Link to="/users" id="link" >Users</Link></button>
							</p>
							<p class = 'logout'>
								<button id='togglebtn'><Link to='' onClick={handleLogout} id="link" >Log Out</Link></button>
							</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<button id='navbtn'><Link to="/movies" id="link" >Movies</Link></button>
							</p>
							<p class = 'msc'>
								<button id='navbtn'><Link to="/music" id="link" >Music</Link></button>
							</p>
							<p class = 'pc'>
								<button id='navbtn'><Link to="/Podcasts" id="link" >Podcasts</Link></button>
							</p>
							
					</div>
				</nav>
			) : (
				<nav>
					<div class='toggle'>
						<p class='distort'>
							<button id="togglebtn"><Link to="/" id="link" >Distort</Link></button>
						</p>
						<p class= 'login'>
							<button id="togglebtn"><Link to="/login" id="link" >Log In</Link></button>
						</p>
						<p class = 'signup'>
							<button id="togglebtn"><Link to="/signup" id="link" >Sign Up</Link></button>
						</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<button id="navbtn"><Link to="/movies" id="link" >Movies</Link></button>
							</p>
							<p class = 'msc'>
								<button id="navbtn"><Link to="/music" id="link" >Music</Link></button>
							</p>
							<p class = 'pc'>
								<button id="navbtn"><Link to="/podcasts" id="link" >Podcasts</Link></button>
							</p>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar