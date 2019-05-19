import fetch from 'isomorphic-fetch'

export const getUserInfo = fetch => async userId => {
  const response = await fetch(`https://graph.facebook.com/${userId}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`)
  const data = await response.json()

  return data
}

export default getUserInfo(fetch)
