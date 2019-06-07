"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getContext', () => {
  it('should return null if payload is not match "Get Started"', () => {
    const userInfo = {
      postback: {
        payload: 'Test null case'
      }
    };
    expect((0, _index.default)(userInfo)).toEqual(null);
  });
  it('should return userInfo object if payload match "Get Started"', () => {
    const userInfo = {
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      },
      first_name: 'John'
    };
    expect((0, _index.default)(userInfo)).toEqual(userInfo);
  });
});