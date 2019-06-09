import get from '../payload/get'

const positive = getPayload => (payloadList, messagePayload) => webHookEvent => {
  const {
    postback: {
      payload
    }
  } = webHookEvent
  if (payload !== messagePayload) return null
  if (!getPayload(payloadList, payload)) return null

  return webHookEvent
}

export default positive(get)
