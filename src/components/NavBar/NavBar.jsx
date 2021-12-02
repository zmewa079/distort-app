import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
							<p>
								Welcome, {user.name}
							</p>
							<p>
								<Link to="/users">Users</Link>
							</p>
							<p>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</p>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<p>
						<Link to="/login">Log In</Link>
						</p>
						<p>
						<Link to="/signup">Sign Up</Link>
						</p>

					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
