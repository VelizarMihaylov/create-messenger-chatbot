import messageHandler from './message-handler'
import welcomeMessage from './messages/welcome-message'
import cantUnderstandMessage from './messages/cant-understand-message'

const verbotly = messageHandler(
  welcomeMessage,
  cantUnderstandMessage
)

export default verbotly
