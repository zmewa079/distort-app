import React, { useState } from 'react'
import './FollowForm.css'

const FollowForm = (props) => {
    const [formData, setformData] = useState({
        userToFollow: '',
        userFollowing: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        try {
            
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button id="followbtn">Follow</button>
        </form>
    );
}



export default FollowForm;