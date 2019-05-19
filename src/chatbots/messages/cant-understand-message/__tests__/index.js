import { cantUnderstandMessage } from '../index'

describe('cantUnderstandWelcomeMessage', () => {
  it('should return null when postback is "Get Started"', async () => {
    const store = jest.fn()
    const send = jest.fn()
    const webHookeEvent = {
      sender: {
        id: '123453'
      },
      postback: {
        payload: 'Get Started'
      }
    }

    expect(await cantUnderstandMessage(store)(send)(webHookeEvent)).toEqual(null)
  })
})
