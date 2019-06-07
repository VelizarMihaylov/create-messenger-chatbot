import assert from 'assert'
import isString from 'lodash/isString'

export const seen = (id = '') => ({
  recipient: {
    id: id
  },
  sender_action: 'mark_seen'
})

export const typingOn = (id = '') => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_on'
})

export const typingOff = (id = '') => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_off'
})

export const imageMessage = ({
  id = '',
  url = '',
  isReusable = true
}) => ({
  recipient: {
    id: id
  },
  message: {
    'attachment': {
      'type': 'image',
      'payload': {
        url,
        is_reusable: isReusable
      }
    }
  }
})

export const textMessage = ({
  id = '',
  text = ''
}) => ({
  recipient: {
    id
  },
  message: {
    text
  }
})

export const optionsMessage = ({
  id = '',
  text = '',
  buttons = [
    {
      type: '',
      title: '',
      payload: ''
    }
  ]
}) => ({
  recipient: {
    id: id
  },
  message: {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: text,
        buttons: buttons
      }
    }
  }
})

export const quickReplies = ({
  id = '',
  text = '',
  quickReplies = [
    {
      content_type: '',
      title: '',
      payload: '',
      image_url: undefined || ''
    }
  ]
}) => {
  assert(text || isString(text),
    `
    No text field provided to quick replies.
    Please make sure you provide a title string.
    `
  )
  quickReplies.forEach(reply => assert(
    reply.content_type === 'text' ||
    reply.content_type === 'location' ||
    reply.content_type === 'user_phone_number' ||
    reply.content_type === 'user_email',
    `
    Invalid content type provided to quick reply.
    Please make sure that the content type you are passing is one of the following:
    'text' | 'location' | user_phone_number | user_email
    `
  ))

  return {
    recipient: {
      id
    },
    message: {
      text,
      quick_replies: quickReplies
    }
  }
}
