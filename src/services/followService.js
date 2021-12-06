function follow(userToFollow, userFollowing) {
    return fetch(`/api/users/${userToFollow}`)
}

export {follow}