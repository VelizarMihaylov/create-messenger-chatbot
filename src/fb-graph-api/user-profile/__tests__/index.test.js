import { getUserInfo } from '../index'

describe('getUserInfo', () => {
  it('should return user info object', async () => {
    const userId = '2443315192379616'
    const fetch = () => new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          json: () => ({
            first_name: 'Velizar',
            second_name: 'Mihaylov',
            image: 'http/velizar/profile'
          })
        }), 500)
    })
    const result = await getUserInfo(fetch)(userId)
    expect(result).toEqual({
      first_name: 'Velizar',
      second_name: 'Mihaylov',
      image: 'http/velizar/profile'
    })
  })
})
