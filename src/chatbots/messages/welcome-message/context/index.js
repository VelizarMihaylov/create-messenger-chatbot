const getContext = async (userInfo = {
  sender: {
    id: ''
  },
  postback: {
    payload: undefined || ''
  }
}) => {
  const {
    postback: {
      payload
    }
  } = userInfo
  if (payload !== 'GET_STARTED') return null
  return userInfo
}

export default getContext
