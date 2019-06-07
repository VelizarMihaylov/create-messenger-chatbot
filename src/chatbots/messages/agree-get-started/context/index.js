const getContext = (userInfo = {
  sender: {
    id: ''
  },
  postback: {
    payload: undefined || ''
  },
  message: undefined || {},
  first_name: ''
}) => {
  const {
    postback: {
      payload
    }
  } = userInfo

  if (payload !== 'AGREE_GET_STARTED') return null

  return userInfo
}

export default getContext
