import POST from './POST'
import { forEach } from '../../../async-fp/forEach'

export const send = (messagesArray = [
  {
    recipient: {
      id: ''
    },
    message: {}
  }
]) => forEach(messagesArray, POST)

export default send
