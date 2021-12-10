import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function removeUser(id) {
  console.log(`${BASE_URL}/${id}`)
  return fetch(`${BASE_URL}/${id}`, {
    method:'DELETE',
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function removeProfile(id) {
  console.log(`${BASE_URL}/user/${id}`)
  return fetch(`${BASE_URL}/${id}`, {
    method:'DELETE',
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

export {
  getAllUsers,
  removeUser,
  removeProfile
}