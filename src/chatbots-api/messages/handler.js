import { forEach } from 'src/async-fp'

export const messageHandlerDefinition = forEach => (...messages) => webHookEvent => {
  forEach(messages, message => message({
    sender: {
      ...webHookEvent.sender
    },
    postback: {
      payload: null,
      ...webHookEvent.postback
    },
    message: {
      text: null,
      quick_reply: {
        payload: null
      },
      ...webHookEvent.message
    }
  }))
}

const handler = messageHandlerDefinition(forEach)

export default handler
