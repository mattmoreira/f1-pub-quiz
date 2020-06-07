// NOTE: this example keeps the access token in LocalStorage just because it's simpler
// but in a real application you may want to use cookies instead for better security

const tokenKey = 'sessionToken'

export const getToken = () => localStorage.getItem(tokenKey)
export const saveToken = token => localStorage.setItem(tokenKey, token)

export const isLoggedIn = () => Boolean(getToken())
