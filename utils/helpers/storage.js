const saveAuth = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  }
}

const deleteAuth = () => {
  window.localStorage.removeItem('token')
}

const getAuth = () => {
  return window.localStorage.getItem('token')
}

export default {
  getAuth,
  saveAuth,
  deleteAuth
}
