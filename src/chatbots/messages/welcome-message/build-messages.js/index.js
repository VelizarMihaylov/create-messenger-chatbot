import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage,
  imageMessage
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
    imageMessage({
      id,
      url: 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg'
    }),
    textMessage({
      id,
      text: `Hi ${first_name}, nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot.`
    }),
    typingOn(id),
    textMessage({
      id,
      text: `I am here to let you know what services we provide at Verbotly and how we can help your business.`
    }),
    typingOn(id),
    textMessage({
      id,
      text: `Please use the prompts, or if you get stuck, click the menu icon at the side to navigate trough the available options. Choose "Speak with a human" if you'd like to chat with a real person.`
    }),
    typingOn(id),
    optionsMessage({
      id,
      text: `Does that sound good to you ${first_name}?`,
      buttons: [
        {
          type: 'postback',
          title: 'Sure lets do this 👍',
          payload: 'AGREE_GET_STARTED'
        }
      ]

    }),
    typingOff(id)
  ]
  return messageArray
}

export default buildMessages
