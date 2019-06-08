import { send } from 'src/fb-graph-api/messages'
import { singleArgumentPipe } from 'src/async-fp'
import { build } from 'src/chatbots-api/messages'
import { positive, negative } from 'src/chatbots-api/context'

const message = ({ context, payloadList, withUserData, messages }) => webHookEvent => {
  let messageContext
  if (context === 'positive') messageContext = positive
  if (context === 'negative') messageContext = negative

  return singleArgumentPipe(
    messageContext(payloadList),
    build({ withUserData, messages }),
    send
  )(webHookEvent)
}

export default message
