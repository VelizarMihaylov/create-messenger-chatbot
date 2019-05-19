import send from '../../../fb-graph-api/messages/send'
import getUserInfo from '../../../fb-graph-api/user-profile'
import { store } from '../../state/index'

export const cantUnderstandMessage = store => send => async webHookEvent => {
  const {
    sender: {
      id
    }
  } = webHookEvent

  const user = await getUserInfo(id)
  const firstName = user['first_name']

  const message = {
    text: `Sorry ${firstName} I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
  }

  if (webHookEvent.postback && webHookEvent.postback.payload === 'Get Started') return null

  await send(id, { senderAction: 'mark_seen' })
  await send(id, { senderAction: 'typing_on' })
  await send(id, { message })
}


export default cantUnderstandMessage(store)(send)
