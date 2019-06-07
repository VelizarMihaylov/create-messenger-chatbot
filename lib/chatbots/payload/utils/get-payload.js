"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getPayloadDefinition = void 0;

const getPayloadDefinition = (payloadList = []) => (payload = '') => payloadList.find(element => element === payload);

exports.getPayloadDefinition = getPayloadDefinition;
const getPayload = getPayloadDefinition(['GET_STARTED', 'CHATBOTS']);
var _default = getPayload;
exports.default = _default;