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
								<button id='distortbtn'><Link to="/">Distort</Link></button>
							</p>
							<p class = 'welcome'>
								Welcome, <Link to="/profile" state={user}>{user.name}</Link>
							</p>
							<p class = 'users'>
								<Link to="/users">Users</Link>
							</p>
							<p class = 'logout'>
								<Link to='' onClick={handleLogout}>Log Out</Link>
							</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<button id="mvbtn"><Link to="/movies">Movies</Link></button>
							</p>
							<p class = 'msc'>
								<button id="mscbtn"><Link to="/music">Music</Link></button>
							</p>
							<p class = 'pc'>
								<button id="pcbtn"><Link to="/Podcasts">Podcasts</Link></button>
							</p>
							
					</div>
				</nav>
			) : (
				<nav>
					<div class='toggle'>
						<p class='distort'>
							<Link to="/">Distort</Link>
						</p>
						<p class= 'login'>
							<Link to="/login">Log In</Link>
						</p>
						<p class = 'signup'>
							<Link to="/signup">Sign Up</Link>
						</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<Link to="/movies">Movies</Link>
							</p>
							<p class = 'msc'>
								<Link to="/music">Music</Link>
							</p>
							<p class = 'pc'>
								<Link to="/podcasts">Podcasts</Link>
							</p>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar