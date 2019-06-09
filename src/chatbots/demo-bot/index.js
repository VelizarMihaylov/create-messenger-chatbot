import { welcome, talk } from 'src/chatbots/demo-bot/messages'
import { handler } from 'src/chatbots-api/messages'

export default handler(welcome, talk)
