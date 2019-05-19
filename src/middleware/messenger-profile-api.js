import fetch from 'isomorphic-fetch'

const messengerProfileApi = fetch => async ctx => {
  const requestBody = {
    'get_started': {
      payload: 'Get Started'
    },
    greeting: [
      {
        locale: 'default',
        text: 'Hello {{user_first_name}} my name is Verbotly and I am a friendly messenger chat bot that can help you grow your business! Click on the Get Started button below to learn more.'
      }
    ]
  }

  const response = await fetch(`https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  const { result } = await response.json()

  if (result.match('success')) {
    ctx.status = 200
    ctx.body = 'Profile Updated'
  }
}

const messengerProfileApiMiddleware = messengerProfileApi(fetch)

export default messengerProfileApiMiddleware
