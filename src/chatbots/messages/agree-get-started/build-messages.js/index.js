import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage
} from '../../../../templates'
import { userInfoType } from '../../../../types'
import getUserInfo from '../../../../fb-graph-api/user-profile'

const buildMessages = async (userInfo = null || userInfoType) => {
  if (!userInfo) return null

  const {
    sender: {
      id
    }
  } = userInfo

  const user = await getUserInfo(id)
  const first_name = user.first_name || ''

  const messageArray = [
    seen(id),
    typingOn(id),
    textMessage({
      id,
      text: `Great ${first_name} 🙌`
    }),
    typingOn(id),
    textMessage({
      id,
      text: 'I can help you learn more about what chatbots are and how they help your business.\n' +
            'In case you are not that interested in the theory behind chatbots I can show you a demo.\n' +
            'Or maybe you would like to speak with a real person from our team to get the ball rolling.'
    }),
    typingOn(id),
    optionsMessage({
      id,
      text: 'Choose one of the options below to let me know what you are interested in.',
      buttons: [
        {
          type: 'postback',
          title: 'Chatbots ℹ️',
          payload: 'CHATBOTS'
        },
        {
          type: 'postback',
          title: 'Demo 🤖',
          payload: 'DEMO'
        },
        {
          type: 'postback',
          title: 'Person 👨',
          payload: 'PERSON'
        }
      ]
    }),
    typingOff(id)
  ]
  return messageArray
}

export default buildMessages
