import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage
} from 'src/chatbots-api/messages/templates'
import { payloadList } from 'src/chatbots/demo-bot/config'

const talk = message({
  context: 'positive',
  payloadList,
  messagePayload: 'TALK',
  withUserData: true,
  messages: [
    seen,
    typingOn,
    textMessage({
      text: `Hi :first_name, someone is calling you.`
    }),
    typingOff
  ]
})

export default talk
