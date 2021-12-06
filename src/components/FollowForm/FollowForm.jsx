import React, { useState } from 'react'

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
            <button>Follow</button>
        </form>
    );
}



export default FollowForm;