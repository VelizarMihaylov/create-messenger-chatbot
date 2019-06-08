import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage,
  imageMessage
} from 'src/chatbots-api/messages/templates'
import { payloadList } from 'src/chatbots/config'

const welcome = message({
  context: 'positive',
  payloadList,
  withUserData: true,
  messages: [
    seen,
    typingOn,
    imageMessage({
      url: 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg'
    }),
    textMessage({
      text: `Hi :first_name, nice to meet you! I am a demo bot feel free to modify me or build your own bot from scratch`,
      withUserData: true
    }),
    typingOn,
    optionsMessage({
      text: `Does that sound good to you :first_name?`,
      buttons: [
        {
          type: 'postback',
          title: 'Sure lets do this 👍',
          payload: 'AGREE_GET_STARTED'
        }
      ],
      withUserData: true
    }),
    typingOff
  ]
})

export default welcome
