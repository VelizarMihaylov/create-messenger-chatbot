import { forEach } from 'src/async-fp'

export const messageHandlerDefinition = forEach => (...messages) => webHookEvent => {
  // @TODO Decide how to manage delivery in the webHookEvent
  // Should it be enabled at all if yes should we manage it per message base etc.
  // For now I am just returning null to avoid unnecessary calls
  if (webHookEvent.delivery) return null
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
