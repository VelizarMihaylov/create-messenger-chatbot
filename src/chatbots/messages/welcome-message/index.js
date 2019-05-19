import send from '../../../fb-graph-api/messages/send'
import getUserInfo from '../../../fb-graph-api/user-profile'
import { singleArgumentPipe } from '../../../async-fp/pipe'

export const welcomeMessage = (getUserInfo) => async webHookEvent => {
  if (!webHookEvent || !webHookEvent.postback) return null

  const {
    sender: {
      id
    },
    postback: {
      payload
    }
  } = webHookEvent

  const user = await getUserInfo(id)

  const firstName = user['first_name']
  const welcomeTemplateMessage = {
    recipient: {
      id: id
    },
    message: {
      'attachment': {
        'type': 'image',
        'payload': {
          'url': 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg',
          'is_reusable': true
        }
      }
    }
  }

  const textMessage = {
    recipient: {
      id: id
    },
    message: {
      text: `Hi ${firstName}, nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot. Choose one of the below options to learn what I can do.`
    }
  }

  const optionsMessage = {
    recipient: {
      id: id
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'Available options',
          buttons: [
            {
              type: 'postback',
              title: 'What is a chatbot?',
              payload: 'WHAT_IS_A_CHAT_BOT'
            },
            {
              type: 'postback',
              title: 'Why Verbotly?',
              payload: 'WHY_VERBOTLY'
            },
            {
              type: 'postback',
              title: 'Speak with a human.',
              payload: 'HOW_CHAT_BOT_CAN_HELP'
            }
          ]
        }
      }
    }
  }
  if (payload !== 'Get Started') return null

  const messageArray = [
    welcomeTemplateMessage,
    textMessage
  ]
  send(messageArray)
}

export default webHookEvent => singleArgumentPipe(
  welcomeMessage(getUserInfo),
  send
)(webHookEvent)
