"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _send = _interopRequireDefault(require("../../../fb-graph-api/messages/send"));

var _pipe = require("../../../async-fp/pipe");

var _context = _interopRequireDefault(require("./context"));

var _buildMessages = _interopRequireDefault(require("./build-messages.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import send from '../../../fb-graph-api/messages/send'
// import getUserInfo from '../../../fb-graph-api/user-profile'
// import {
//   seen,
//   typingOn,
//   typingOff,
//   textMessage
// } from '../../../templates'
// import { singleArgumentPipe } from '../../../async-fp/pipe'
// export const cantUnderstandMessage = async webHookEvent => {
//   const {
//     sender: {
//       id
//     }
//   } = webHookEvent
//   const user = await getUserInfo(id)
//   const firstName = user['first_name']
//   if (webHookEvent.postback && webHookEvent.postback.payload === 'Get Started') return null
//   const messageArray = [
//     seen(id),
//     typingOn(id),
//     textMessage({
//       id,
//       text: `Sorry ${firstName} I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
//     }),
//     typingOff()
//   ]
//   return messageArray
// }
// export default webHookEvent => singleArgumentPipe(
//   cantUnderstandMessage,
//   send
// )(webHookEvent)
var _default = webHookEvent => (0, _pipe.singleArgumentPipe)(_context.default, _buildMessages.default, _send.default)(webHookEvent);

exports.default = _default;