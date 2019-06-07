export const getPayloadDefinition = (payloadList = []) => (payload = '') => payloadList.find(element => element === payload)

const getPayload = getPayloadDefinition([
  'GET_STARTED',
  'CHATBOTS'
])

export default getPayload
