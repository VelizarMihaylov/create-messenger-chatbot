"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  } = userInfo;
  if (payload !== 'AGREE_GET_STARTED') return null;
  return userInfo;
};

var _default = getContext;
exports.default = _default;