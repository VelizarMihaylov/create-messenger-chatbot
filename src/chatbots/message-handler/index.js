const messageHandler = (...messages) => webHookEvent => messages.forEach(async message => message(await webHookEvent))

export default messageHandler
