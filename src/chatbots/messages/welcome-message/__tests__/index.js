import { welcomeMessage } from '../index'

describe('welcomeMessage', () => {
  it('should call send with sender id and message when payload match "Get Started"', async () => {
    const getUserInfo = () => new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          json: () => ({
            first_name: 'Velizar',
            second_name: 'Mihaylov',
            image: 'http/velizar/profile'
          })
        }), 500)
    })
    const send = jest.fn()
    const webHookEvent = {
      sender: {
        id: '2443315192379616'
      },
      recipient: {
        id: '2232089013533399'
      },
      timestamp: 1557577980165,
      postback: {
        title: 'Get Started',
        payload: 'Get Started'
      }
    }
    const message = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'Hi {{first_user_name}}, nice to meet you!',
              subtitle: 'My name is Verbotly and I am a friendly Messenger chatbot that help businesses grow',
              buttons: [
                {
                  type: 'postback',
                  title: 'What is a chatbot?',
                  payload: 'WHAT_IS_A_CHAT_BOT'
                },
                {
                  type: 'postback',
                  title: 'What a chatbot can do?',
                  payload: 'HOW_CHAT_BOT_CAN_HELP'
                },
                {
                  type: 'postback',
                  title: 'Why Verbotly?',
                  payload: 'WHY_VERBOTLY'
                },
                {
                  type: 'postback',
                  title: 'Speak with a human.',
                  payload: 'HOW_CHAT_BOT_CAN_HELP'
                }
              ]
            }
          ]
        }
      }
    }
    await welcomeMessage(getUserInfo, send)(webHookEvent)
    expect(send).toHaveBeenCalledWith(webHookEvent.sender.id, { message })
  })

  it('should not call send when payload does not match "Get Started"', async () => {
    const send = jest.fn()
    const webHookEvent = {
      sender: {
        id: '2443315192379616'
      },
      recipient: {
        id: '2232089013533399'
      },
      timestamp: 1557577980165,
      postback: {
        title: 'Skip',
        payload: 'Skip'
      }
    }
    await welcomeMessage(send)(webHookEvent)
    expect(send).toHaveBeenCalledTimes(0)
  })

  it('should return null when payload does not match "Get Started"', async () => {
    const send = jest.fn()
    const webHookEvent = {
      sender: {
        id: '2443315192379616'
      },
      recipient: {
        id: '2232089013533399'
      },
      timestamp: 1557577980165,
      postback: {
        title: 'Skip',
        payload: 'Skip'
      }
    }
    expect(await welcomeMessage(send)(webHookEvent)).toEqual(null)
  })
})
