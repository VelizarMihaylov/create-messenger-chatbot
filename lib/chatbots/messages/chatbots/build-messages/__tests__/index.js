"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('buildMessages', () => {
  it('should return null if no user info', () => {
    expect((0, _index.default)(null)).toEqual(null);
  });
  it('should return a messages array when called with ', () => {
    const userInfo = {
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      },
      first_name: 'John'
    };
    expect((0, _index.default)(userInfo)).toMatchSnapshot();
  });
});