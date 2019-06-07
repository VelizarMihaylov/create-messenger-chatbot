import {
  seen,
  typingOn,
  typingOff,
  textMessage
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
  const {
    first_name
  } = user

  const messageArray = [
    seen(id),
    typingOn(id),
    textMessage({
      id,
      text: `Sorry ${first_name} I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
    }),
    typingOff(id)
  ]
  return messageArray
}

export default buildMessages
